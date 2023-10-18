// Import Express and create an Express Router for defining routes
const express = require("express");
const router = express.Router();

// Import the Admin Dashboard Controller for admin-dashboard-related logic
const DashboardController = require("../controllers/DashboardController");

// Admin Dashboard (Admin)
router.post("/admin/dashboard", DashboardController.getDashboardData);

module.exports = router;
