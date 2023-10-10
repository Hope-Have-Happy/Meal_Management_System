const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');

// User login route
router.post('/login', AuthController.login);

// User logout route
router.get('/logout', AuthController.logout);

// Password reset request route
router.post('/reset-password/request', AuthController.requestPasswordReset);

// Password reset confirmation route
router.post('/reset-password/confirm', AuthController.confirmPasswordReset);

module.exports = router;
