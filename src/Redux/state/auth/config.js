const config = {
    auth0: {
        domain: process.env.REACT_APP_AUTH0_DOMAIN,
        clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
        responseType: "token id_token",
        scope: "openid profile email",
        redirects: {
            loginCallbackUri: process.env.REACT_APP_AUTH0_LOGIN_CALLBACK_URI,
            logoutCallbackUri: process.env.REACT_APP_AUTH0_LOGOUT_CALLBACK_URI,
        }
    },
    app: {
        authIntervalCheckMinutes: 3, // in minutes
        redirects: {
            loginSuccess: '/',
            logoutSuccess: '/',
        }
    }
}

export default config;