const express = require('express');
const router = express.Router();

// Load User model
const User = require('../models/User');

// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', (req, res) => {
  // Registration code goes here
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('/login', (req, res) => {
  // Login code goes here
});

module.exports = router;