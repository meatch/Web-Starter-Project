const express = require('express');
const router = express.Router();

router.post('/auth', (req,res) => {
    console.log('User Logged In');
    res.json('User Logged In');
});

module.exports = router;