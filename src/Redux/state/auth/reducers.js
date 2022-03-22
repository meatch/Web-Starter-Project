
import { ActionTypes } from '../actionTypes';
import config from './config.js';
import auth0API from './auth0API.js';

const defaultState =  {
    isAuthenticated: false,
    userProfile: null,
    auth0API: auth0API,
    config: config,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.AUTH_SET:
            // history and location provided bu React Router Dom
            return {
                ...state,
                history: action.history,
                location: action.location,
            }
        case ActionTypes.AUTH_AUTHENTICATE: {
            return {
                ...state,
                isAuthenticated: action.isAuthenticated,
            }
        }
        case ActionTypes.AUTH_IS_AUTHENTICATED: {
            return {
                ...state,
                isAuthenticated: action.isAuthenticated,
            }
        }
        case ActionTypes.AUTH_USER_PROFILE_SET: {
            return {
                ...state,
                userProfile: action.userProfile,
            }
        }
        case ActionTypes.AUTH_LOGOUT: {
            return {
                ...state,
                userProfile: action.userProfile,
                isAuthenticated: action.isAuthenticated,
            }
        }
        default:
            return state;
    }
}