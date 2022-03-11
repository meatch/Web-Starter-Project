require('../common/mongoose.conn.js');
const reqResp = require('../common/reqResp.js');
const User = require('../models/User.js');

const LoginController = () => {

    /* Login ---------------------------*/
    const login = reqResp(({reqBody, handleResponse, handleError}) => {
        User.findOne({"username": reqBody.username},(err, dbUser) => {
            if (err) handleError(err);

            if (dbUser) {
                // test a matching password
                dbUser.comparePassword(reqBody.password, dbUser.password, (err, isMatch) => {
                    if (err) handleError(err);
                    if (isMatch) {
                        handleResponse(dbUser, 'Account exists and password is a match.');
                    } else {
                        handleResponse(dbUser, 'Login Failed: Account exists, but password is incorrect.', false);
                    }
                });
            } else {
                handleResponse(dbUser, 'Login Failed: Could not find account in our records.', false);
            }
        });
    });

    return {
        login: login
    }
}

module.exports = LoginController();