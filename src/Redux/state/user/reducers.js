import { ActionTypes } from '../actionTypes';

const defaultState = {
    isAuthenticated: false,
    profile: {},
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.USER_PROFILE_SET:
            return {
                ...state,
                profile: action.profile,
            };
        case ActionTypes.USER_IS_AUTHENTICATED_SET: {
            return {
                ...state,
                isAuthenticated: action.isAuthenticated,
            }
        }
        default:
            return state;
    }
}