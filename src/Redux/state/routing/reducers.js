import { ActionTypes } from '../actionTypes';
import config from '../config.js';

const defaultState = {
    redirectAfterLogin: config.app.redirects.loginSuccess,
    redirectAfterLogout: config.app.redirects.logoutSuccess,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.ROUTING_REDIRECT_AFTER_LOGIN_SET:
            return {
                ...state,
                redirectAfterLogin: action.redirectAfterLogin
            };
        default:
            return state;
    }
}