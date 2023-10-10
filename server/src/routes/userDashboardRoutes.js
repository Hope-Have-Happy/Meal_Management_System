const express = require("express");
const router = express.Router();
const UserDashboardController = require("../controllers/userDashboardController");

// User dashboard route
router.get("/user-dashboard", UserDashboardController.getUserDashboardData);

module.exports = router;
