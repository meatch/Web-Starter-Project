import { ActionTypes } from '../actionTypes';

const defaultState = {
    loggedIn: false,
    profile: {},
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.USER_LOGIN:
            return {
                loggedIn: true,
                profile: action.profile
            };
        case ActionTypes.USER_LOGOUT:
            return {
                loggedIn: false,
                profile: {}
            };
        default:
            return state;
    }
}