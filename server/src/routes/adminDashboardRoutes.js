const express = require('express');
const router = express.Router();
const AdminDashboardController = require('../controllers/adminDashboardController');

// Admin dashboard route
router.get('/', AdminDashboardController.getAdminDashboardData);

module.exports = router;
