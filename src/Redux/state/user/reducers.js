import { ActionTypes } from '../actionTypes';

const defaultState = {
    loggedIn: false,
    profile: {},
    payment: {},
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
        case ActionTypes.USER_ADD_PAYMENT:
            return {
                ...state,
                payment: action.payment,
            };
        default:
            return state;
    }
}