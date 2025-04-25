const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getMe } = require('../controllers/userController.js');

// Protected route (requires JWT)
router.get('/profile', auth, getMe);

module.exports = router;