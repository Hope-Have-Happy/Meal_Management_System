// Example routes for settings
const express = require("express");
const router = express.Router();
const SettingsController = require("../controllers/settingsController");

// Create a new settings record
router.post("/setting", SettingsController.createSettings);

// Get settings by ID
router.get("/setting/:id", SettingsController.getSettingsById);

// Update settings by ID
router.put("/setting/:id", SettingsController.updateSettings);

// Delete settings by ID
router.delete("/setting/:id", SettingsController.deleteSettings);

module.exports = router;
