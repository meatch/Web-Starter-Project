import { ActionTypes } from '../actionTypes';

export const login = (profile) => {
    return ({
        type: ActionTypes.USER_LOGIN,
        profile: profile
    });
}

export const logOut = () => {
    return ({
        type: ActionTypes.USER_LOGOUT
    });
}