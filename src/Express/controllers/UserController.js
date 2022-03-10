const express = require('express');
const router = express.Router();
require('../connections/mongoose.js');
const User = require('../models/User.js');

/*-----------------------------------------------------------
| Verb        | Endpoint            | Result                |
| ----------- | ------------------- | --------------------- |
| GET         | users/              | All                   |
| POST        | users/              | Create User           |
| PATCH       | users/:id           | Update User           |
| PATCH       | users/:id/password  | Update User Password  |
| DELETE      | users/:id           | Delete User           |
------------------------------------------------------------*/

/* Users: Get All ---------------------------*/
router.get('/', (req,res) => {
    console.log('Users: All');
    User.find({},(err, users) => {
        if (err) throw err;
        res.json(users);
    });
});

/* Users: Create User ---------------------------*/
router.post('/', (req,res) => {
    console.log('Users: Create User');

    const reqUser = req.body;

    if (reqUser.username && reqUser.password) {
        // Make sure account does not already exist
        User.findOne({ username: reqUser.username },(err, user) => {
            if (err) throw err;

            if (!user) {
                const newUser = new User(reqUser);
                newUser.save((err, resp) => {
                    if (err) throw err;
                    res.json(resp);
                });
            } else {
                res.json('User already exists.');
            }
        });
    } else {
        res.json('Username and Password are required to create an account.');
    }
});

/* Users: Update User ---------------------------*/
router.patch('/:id', (req,res) => {
    console.log('Users: Update User');

    const reqUser = req.body;

    if (req.params.id) {
        // Make sure account exists
        User.findOne({ "_id": req.params.id },(err, user) => {
            if (err) throw err;

            if (user) {

                console.log('user', user);

                user.first = reqUser.first;
                user.last = reqUser.last;
                user.username = reqUser.username;

                user.save((err, resp) => {
                    if (err) throw err;
                    res.json(resp);
                });

            } else {
                res.json('Could not find user in our records.');
            }
        });
    } else {
        res.json('User ID is required to update an account.');
    }
});


/* Users: Update User Password ---------------------------*/
router.patch('/:id/password', (req,res) => {
    console.log('Users: Update User Password');

    const reqUser = req.body;

    if (req.params.id) {
        // Make sure account exists
        User.findOne({ "_id": req.params.id },(err, user) => {
            if (err) throw err;

            if (user) {

                console.log('user', user);

                // Modified password - will trigger middleware and hash the password for us - pretty cool.
                user.password = reqUser.password;

                user.save((err, resp) => {
                    if (err) throw err;
                    res.json(resp);
                });

            } else {
                res.json('Could not find user in our records.');
            }
        });
    } else {
        res.json('User ID is required to update an account.');
    }
});

module.exports = router;