const express = require('express');
const router = express.Router();

const sampleData = require('./sampleData.json');

router.get('/', (req,res) => { 
    res.json(sampleData);
    console.log('Retrieved Sample Data'); 
});

module.exports = router;