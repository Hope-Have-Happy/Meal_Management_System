// Import Express and create an Express Router for defining routes
const express = require("express");
const router = express.Router();

// Import the Settings Controller for settings-related logic
const SettingsController = require("../controllers/SettingsController");

// Get application settings (Admin and User)
router.get("/settings", SettingsController.getSettings);

// Update application settings (Admin)
router.put("/settings", SettingsController.updateSettings);

module.exports = router;
