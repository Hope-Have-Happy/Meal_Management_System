// Import Express and create an Express Router for defining routes
const express = require("express");
const router = express.Router();

// Import the Admin Dashboard Controller for admin-dashboard-related logic
const DashboardController = require("../controllers/DashboardController");
const { isLoggedIn, isAdmin } = require("../middlewares/authMiddleware");

// Admin Dashboard (Admin)
router.get(
  "/admin/dashboard",
  isLoggedIn,
  isAdmin,
  DashboardController.getDashboardData
);

module.exports = router;
