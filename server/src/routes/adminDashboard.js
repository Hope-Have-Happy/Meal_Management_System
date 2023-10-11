// Import necessary controllers
const {
  getAdminDashboardStats,
} = require("../controllers/adminDashboardController");

const express = require("express");
const router = express.Router();

// Define the route for admin dashboard statistics
router.get("/admin-dashboard", getAdminDashboardStats);

module.exports = router;
