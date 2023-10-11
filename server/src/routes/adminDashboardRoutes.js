const express = require("express");
const router = express.Router();

const DashboardController = require("../controllers/DashboardController");

// Admin Dashboard (Admin)
router.post("/admin/dashboard", DashboardController.getDashboardData);

module.exports = router;
