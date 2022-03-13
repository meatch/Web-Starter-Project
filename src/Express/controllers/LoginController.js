require('../common/mongoose.conn.js');
const reqResp = require('../common/reqResp.js');
const User = require('../models/User.js');

const LoginController = () => {

    /* Login ---------------------------*/
    const login = reqResp(({expReq, reqBody, handleResponse, handleError}) => {
        User.findOne({"username": reqBody.username},(err, dbUser) => {
            if (err) handleError(err);

            if (dbUser) {
                // test a matching password
                dbUser.comparePassword(reqBody.password, dbUser.password, (err, isMatch) => {
                    if (err) handleError(err);
                    if (isMatch) {

                        const session = expReq.session;
                        session.userid = dbUser._id.toString();
                        // console.log(expReq.session);

                        handleResponse(dbUser, 'Login Success.');
                    } else {
                        handleResponse(dbUser, 'Login Failed: Account exists, but password is incorrect.', false);
                    }
                });
            } else {
                handleResponse(dbUser, 'Login Failed: Could not find account in our records.', false);
            }
        });
    });

    /* Logout ---------------------------*/
    const logout = reqResp(({expReq, handleResponse}) => {
        const session = expReq.session;
        session.destroy();
        // console.log(expReq.session);
        handleResponse([], 'Logout Success.');
    });

    return {
        login: login,
        logout: logout,
    }
}

module.exports = LoginController();