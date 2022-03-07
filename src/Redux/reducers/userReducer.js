import { ActionTypes } from '../actionTypes';

const defaultState = {
    loggedIn: false,
    profile: {},
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.USER_PROFILE_UPDATE:
            return {
                ...state,
                profile: action.profile
            };
        case ActionTypes.USER_LOGGED_IN_UPDATE:
            return {
                ...state,
                loggedIn: action.loggedIn
            };
        default:
            return state;
    }
}