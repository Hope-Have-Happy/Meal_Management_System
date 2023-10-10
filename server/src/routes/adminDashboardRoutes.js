const express = require("express");
const router = express.Router();
const AdminDashboardController = require("../controllers/adminDashboardController");

// Admin dashboard route
router.get("/admin-dashboard", AdminDashboardController.getAdminDashboardData);

module.exports = router;
