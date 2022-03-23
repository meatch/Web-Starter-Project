import { ActionTypes } from '../actionTypes';

export const profileSet = (profile) => {
    return ({
        type: ActionTypes.USER_PROFILE_SET,
        profile: profile
    });
}

export const isAuthenticatedSet = (isAuthenticated) => {
    return ({
        type: ActionTypes.USER_IS_AUTHENTICATED_SET,
        isAuthenticated: isAuthenticated
    });
}