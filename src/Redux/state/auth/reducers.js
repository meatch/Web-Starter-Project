
import config from '../config.js';
import auth0API from './auth0API.js';

const defaultState =  {
    auth0API: auth0API,
    config: config,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}