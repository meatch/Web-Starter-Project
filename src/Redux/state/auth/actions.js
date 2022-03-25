import { reqResp } from 'common/axios.js';
import config from '../config.js';
import * as UserActions from '../user/actions.js';

/**
 * authenticate: Captures auth0 callback JWT, adds to Express session, redirects
 */
export const authenticate = () => {
    return (dispatch, getState) => {

        const { auth: { auth0API } } = getState();

        auth0API.parseHash(async (err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                const authData = {
                    accessToken: authResult.accessToken,
                    idToken: authResult.idToken,
                }

                const resp = await reqResp('post', '/auth0/authenticate', authData);

                dispatch(UserActions.isAuthenticatedSet(resp.success));
                dispatch(setUserProfile());

            } else if (err) {
                console.log('err', err);

                dispatch(UserActions.isAuthenticatedSet(false));
            }
        });
    }
}

/**
 * login: Initiate the auth0 login api
 */
export const login = () => {
    return (dispatch, getState) => {
        const { auth: { auth0API }  } = getState();
        auth0API.authorize();
    }
}

/**
 * logout: Clean Up Script for Disavowing user
 */
export const logout = () => {
    return (dispatch, getState) => {

        const { auth: { auth0API }  } = getState();

        // 1. Clear Express Session
        reqResp('get', '/auth0/disavow');

        // 2. auth0 logout
        auth0API.logout({
            clientID: config.auth0.clientID,
            returnTo: config.auth0.redirects.logoutCallbackUri,
        });

        // 3. Reset Redux State
        dispatch(UserActions.isAuthenticatedSet(false));
        dispatch(UserActions.profileSet({}));
    }
}

/**
 * isAuthenticated: Checks Express Session to see if User is logged in
 */
export const isAuthenticated = () => {
    return (dispatch) => {
        reqResp('get', '/auth0/isAuthenticated')
            .then((resp) => {
                dispatch(UserActions.isAuthenticatedSet(resp.success));
            });
    }
}

/**
 * authIntervalCheck: Sets Up an Auth Check
 * @param {function} dispatch
 * @returns
 */
export const authIntervalCheck = (dispatch) => {

    let intervalID = null;

    const start = () => {

        // Check on initial load
        dispatch(isAuthenticated());

        // Then do intervals
        const minutes = config.app.authIntervalCheckMinutes;
        const intervalInMinutes = (1000 * 60 * minutes);
        intervalID = setInterval(() => {
            dispatch(isAuthenticated());
        }, intervalInMinutes);

    }
    const end = () => {
        clearInterval(intervalID);
    }

    return { start, end };
}

/**
 * getAccessToken: Gets auth0 access token stored in Express Session
 * @returns {string} accessToken
 */
export const getAccessToken = async () => {
    const { payload } = await reqResp('get', '/auth0/getAccessToken');

    if (!payload.accessToken) {
        console.log('No access token found');
    }

    return payload.accessToken;
}

/**
 * setUserProfile: Set User Profile from auth0
 */
export const setUserProfile = () => {
    return async (dispatch, getState) => {

        const { auth: { auth0API } } = getState();

        // Get Express Session Stored auth0 accessToken
        const accessToken = await getAccessToken();

        if (accessToken) {
            // Get profile from auth0
            auth0API.client.userInfo(accessToken, (err, userProfile) => {
                if (userProfile) {
                    dispatch(UserActions.profileSet(userProfile));
                } else {
                    console.log('Error', err);
                }
            });
        }
    }
}
