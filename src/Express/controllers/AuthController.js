require('../common/mongoose.conn.js');
const reqResp = require('../common/reqResp.js');

const AuthController = () => {

    /* Authenticate ---------------------------*/
    const authenticate = reqResp(({expReq, reqBody, handleResponse, handleError}) => {
        handleResponse({}, 'authenticate Success.');
        // const session = expReq.session;
        // session.userid = dbUser._id.toString();
        // handleResponse(dbUser, 'Login Success.');
    });

    /* See If User is Authenticated ---------------------------*/
    const isAuthenticated = reqResp(({expReq, reqBody, handleResponse, handleError}) => {
        handleResponse({}, 'isAuthenticated Success.');
        // const session = expReq.session;
        // session.userid = dbUser._id.toString();
        // handleResponse(dbUser, 'Login Success.');
    });

    /* Get Express auth0 Session Token ---------------------------*/
    const getAccessToken = reqResp(({expReq, reqBody, handleResponse, handleError}) => {
        handleResponse({}, 'getAccessToken Success.');
        // const session = expReq.session;
        // session.userid = dbUser._id.toString();
        // handleResponse(dbUser, 'Login Success.');
    });

    /* Disavow :: Clear Session, log out user. ---------------------------*/
    const disavow = reqResp(({expReq, reqBody, handleResponse, handleError}) => {
        handleResponse({}, 'disavow Success.');
        // const session = expReq.session;
        // session.userid = dbUser._id.toString();
        // handleResponse(dbUser, 'Login Success.');
    });

    return {
        authenticate: authenticate,
        isAuthenticated: isAuthenticated,
        getAccessToken: getAccessToken,
        disavow: disavow,
    }
}

module.exports = AuthController();