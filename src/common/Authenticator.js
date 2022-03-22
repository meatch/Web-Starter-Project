import Auth0API from 'auth0-js';
import { reqResp } from './axios.js';

export default class Authenticator {

    /**
     * constructor: Starts the party
     * @param {object} history React Router history Object
     * @param {object} location React Router location Object
     */
    constructor(history, location) {
        this.history = history;
        this.location = location;

        this.userProfile = null;

        this.webAuthConfig =  {
            domain: process.env.REACT_APP_AUTH0_DOMAIN,
            clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
            redirectUri: process.env.REACT_APP_AUTH0_LOGIN_REDIRECT_URI,
            responseType: "token id_token",
            scope: "openid profile"
        };

        this.config = {
            ...this.webAuthConfig,
            returnTo: process.env.REACT_APP_AUTH0_LOGOUT_REDIRECT_URI,
        }

        this.auth0API = new Auth0API.WebAuth(this.webAuthConfig);
    }

    /**
     * login: Redirects to auth0 login form - where the magic begins
     */
    login = () => {
        this.auth0API.authorize();
    }

    /**
     * authenticate: Captures auth0 callback JWT, adds to Express session, redirects
     */
    authenticate = () => {
        if (/access_token|id_token|error/.test(this.location.hash)) {
            this.auth0API.parseHash(async (err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    const authData = {
                        authResult: authResult.accessToken,
                        idToken: authResult.idToken,
                    }

                    await reqResp('post', '/auth0/authenticate', authData);
                    this.history.push("/");
                } else if (err) {
                    console.log('Error', err);
                    this.history.push("/");
                }
            });
        } else {
            throw new Error("Invalid callback URL.");
        }
    }

    /**
     * isAuthenticated: Checks Express Session to see if User is logged in
     * @returns {boolean} true if user is still logged in
     */
    isAuthenticated = async () => {
        const resp = await reqResp('post', '/auth0/isAuthenticated');
        console.log('isAuthenticated resp', resp);
        return resp.success;
    }

    /**
     * logout: Kills express Session, nullifies user, and logs out of auth0
     */
    logout = async () => {
        // Clear Express Session
        await reqResp('get', '/auth0/disavow');

        // Nullify this Class Instance of userProfile
        this.userProfile = null;

        // auth0 logout
        this.auth0API.logout({
            clientID: this.config.clientID,
            returnTo: this.config.returnTo,
        });
    }

    /**
     * getAccessToken: Gets auth0 access token stored in Express Session
     * @returns {string} accessToken
     */
    getAccessToken = async () => {
        const accessToken = await reqResp('get', '/auth0/getAccessToken');

        if (!accessToken) {
            throw new Error("No access token found");
        }

        return accessToken;
    }

    /**
     * getProfile: Get Profile from auth0
     * @param {*} callback: Callback method to handle response.
     * @returns {mixed}  result of callback function
     */
    getProfile = async (callback) => {
        // No need to do extra work if we already have profile
        if (this.userProfile) {
            return callback(this.userProfile);
        }

        // Get Express Session Stored auth0 accessToken
        const accessToken = await this.getAccessToken();

        // Get profile from auth0
        return this.auth0API.client.useInfo(accessToken, (err, profile) => {
            if (profile) {
                this.userProfile = profile;
                return callback(this.userProfile);
            } else {
                console.log('Error', err);
                throw new Error("Invalid auth0 profile request.");
            }
        });
    }
}