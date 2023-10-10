// Import necessary controllers
const {
  getAdminDashboardStats,
} = require("../controllers/adminDashboardController");

const router = express.Router();
const express = require("express");

// Define the route for admin dashboard statistics
router.get("/admin-dashboard", getAdminDashboardStats);

module.exports = router;
