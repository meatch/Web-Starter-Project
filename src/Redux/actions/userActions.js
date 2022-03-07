import { ActionTypes } from '../actionTypes';

export const userProfileUpdate = (profile) => {
    return ({
        type: ActionTypes.USER_PROFILE_UPDATE,
        profile: profile
    });
}

export const userLoggedInUpdate = (loggedIn) => {
    return ({
        type: ActionTypes.USER_LOGGED_IN_UPDATE,
        loggedIn: loggedIn
    });
}