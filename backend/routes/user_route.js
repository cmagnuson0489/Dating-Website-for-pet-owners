const express = require('express');
const router = express.Router();

//Next let's load the user model

const User = require('.../models/User');

router .post('/register', (req, res) => {
    //registrion code will eventually go here
});


router.post('/login', (req, res) => {
    //login code will ventually go here
});

module.exports=router;