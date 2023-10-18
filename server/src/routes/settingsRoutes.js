// Import Express and create an Express Router for defining routes
const express = require("express");
const router = express.Router();

// Import the Settings Controller for settings-related logic
const SettingsController = require("../controllers/SettingsController");
const { isAdmin, isLoggedIn } = require("../middlewares/authMiddleware");

// Get application settings (Admin)
router.get("/settings", isLoggedIn, isAdmin, SettingsController.getSettings);

// Update application settings (Admin)
router.put("/settings", isLoggedIn, isAdmin, SettingsController.updateSettings);

module.exports = router;
