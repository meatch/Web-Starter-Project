require('../common/mongoose.conn.js');
const reqResp = require('../common/reqResp.js');

const AuthController = () => {

    /* Authenticate ---------------------------*/
    const authenticate = reqResp(({expReq, reqBody, handleResponse}) => {
        console.log('Authenticate');
        const session = expReq.session;
        session.accessToken = reqBody.accessToken;
        session.idToken = reqBody.idToken;
        handleResponse({}, 'authenticate Success.');
    });

    /* See If User is Authenticated ---------------------------*/
    const isAuthenticated = reqResp(({expReq, handleResponse}) => {
        const session = expReq.session;
        const isAuthenticated = !!(session.idToken && session.accessToken);

        if (isAuthenticated) {
            handleResponse({isAuthenticated: isAuthenticated}, 'isAuthenticated Success.');
        } else {
            handleResponse({}, 'isAuthenticated Failed.', false);
        }
    });

    /* Get Express auth0 Session Token ---------------------------*/
    const getAccessToken = reqResp(({expReq, handleResponse}) => {
        console.log('Get Access Token');
        const session = expReq.session;
        handleResponse({
            accessToken: session.accessToken
        }, 'getAccessToken Success.');
    });

    /* Disavow :: Clear Session, log out user. ---------------------------*/
    const disavow = reqResp(({expReq, handleResponse}) => {
        console.log('Get Access Token');
        const session = expReq.session;
        session.accessToken = null;
        session.idToken = null;
        handleResponse({}, 'disavow Success.');
    });

    return {
        authenticate: authenticate,
        isAuthenticated: isAuthenticated,
        getAccessToken: getAccessToken,
        disavow: disavow,
    }
}

module.exports = AuthController();