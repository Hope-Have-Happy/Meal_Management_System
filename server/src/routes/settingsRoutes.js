const express = require("express");
const router = express.Router();

const SettingsController = require("../controllers/SettingsController");

// Application Settings
// Get application settings
router.get("/settings", SettingsController.getSettings);

// Update application settings
router.put("/settings", SettingsController.updateSettings);

module.exports = router;
