const express = require("express");
const router = express.Router();

const SettingsController = require("../controllers/SettingsController");

// Get application settings (Admin and User)
router.get("/settings", SettingsController.getSettings);

// Update application settings (Admin)
router.put("/settings", SettingsController.updateSettings);

module.exports = router;
