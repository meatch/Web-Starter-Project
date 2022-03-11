require('../common/mongoose.conn.js');
const User = require('../models/User.js');
const reqResp = require('../common/reqResp.js');

const UserController = () => {

    /* User: All ---------------------------*/
    const all = reqResp(({handleResponse, handleError}) => {
        User.find({},(err, users) => {
            if (err) handleError(err);
            handleResponse(users, 'All users retrieved.');
        });
    });

    /* User: byID ---------------------------*/
    const byID = reqResp(({reqParams, handleResponse, handleError}) => {
        if (reqParams.id) {
            // Make sure account exists
            User.findOne({ "_id": reqParams.id },(err, dbUser) => {
                if (err) handleError(err);
                handleResponse(dbUser, 'User retrieved.');
            });
        } else {
            handleResponse({_id: expReq.params.id, body: reqUser}, 'Unable to locate account by userID.', false);
        }
    });

    /* User: Create ---------------------------*/
    const create = reqResp(({reqBody, handleResponse, handleError}) => {
        if (reqBody.username && reqBody.password) {
            // Make sure account does not already exist
            User.findOne({ username: reqBody.username },(err, dbUser) => {
                if (err) handleError(err);

                if (!dbUser) {
                    const newUser = new User(reqBody);
                    newUser.save((err, payload) => {
                        if (err) handleError(err);
                        handleResponse(payload, 'Account created.');
                    });
                } else {
                    handleResponse(dbUser, 'Account already exists.', false);
                }
            });
        } else {
            handleResponse(reqBody, 'Username and password are required to create an account.', false);
        }
    });

    /* Users: Get All ---------------------------*/
    const update = reqResp(({reqBody, reqParams, handleResponse, handleError}) => {
        if (reqParams.id) {
            // Make sure account exists
            User.findOne({ "_id": reqParams.id },(err, dbUser) => {
                if (err) handleError(err);

                if (dbUser) {
                    dbUser.first = reqBody.first;
                    dbUser.last = reqBody.last;
                    dbUser.username = reqBody.username;

                    dbUser.save((err, resp) => {
                        if (err) handleError(err);
                        handleResponse(resp, 'Account updated.');
                    });

                } else {
                    handleResponse(dbUser, 'Account Update Failed: Could not find account in our records.', false);
                }
            });
        } else {
            handleResponse({_id: expReq.params.id, body: reqUser}, 'Account Update Failed: User ID is required to update an account.', false);
        }
    });

    /* Users: Update User Password ---------------------------*/
    const updatePassword = reqResp(({reqBody, reqParams, handleResponse, handleError}) => {
        if (reqParams.id) {
            // Make sure account exists
            User.findOne({ "_id": reqParams.id },(err, dbUser) => {
                if (err) handleError(err);

                if (dbUser) {
                    // Modified password - will trigger middleware and hash the password for us - pretty cool.
                    dbUser.password = reqBody.password;

                    dbUser.save((err, resp) => {
                        if (err) handleError(err);
                        handleResponse(resp, 'Account password updated.');
                    });

                } else {
                    handleResponse(dbUser, 'Password Update Failed: Could not find user in our records.', false);
                }
            });
        } else {
            handleResponse({ _id: expReq.params.id, body: reqBody }, 'Password Update Failed: User ID is required to update an account.', false);
        }
    });

    return {
        all: all,
        byID: byID,
        create: create,
        update: update,
        updatePassword: updatePassword,
    }
}

module.exports = UserController();