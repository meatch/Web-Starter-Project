const express = require('express');
const router = express.Router();
require('../connections/mongoose.js');
const User = require('../models/User.js');

/* Get All ---------------------------*/
router.get('/', (req,res) => {
    console.log('Users: All');
    User.find({},(err, users) => {
        if (err) throw err;
        res.json(users);
    });
});

/* Create ---------------------------*/
router.post('/', (req,res) => {
    console.log('Users: Create');
    const newUser = new User(req.body);
    newUser.save((err, resp) => {
        if (err) throw err;
        res.json(resp);
    });
});


module.exports = router;