const express = require('express');
const router = express.Router();
const UserDashboardController = require('../controllers/userDashboardController');

// User dashboard route
router.get('/', UserDashboardController.getUserDashboardData);

module.exports = router;
