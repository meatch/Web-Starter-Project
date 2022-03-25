import Auth0API from 'auth0-js';
import config from '../config.js';

const webAuthConfig = {
    domain: config.auth0.domain,
    clientID: config.auth0.clientID,
    redirectUri: config.auth0.redirects.loginCallbackUri,
    responseType: config.auth0.responseType,
    scope: config.auth0.scope,
}

const auth0API = new Auth0API.WebAuth(webAuthConfig);

export default auth0API;