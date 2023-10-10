// Import necessary controllers
const {
  createOrUpdateSettings,
  getAllSettings,
} = require("../controllers/SettingsController");

const express = require("express");
const router = express.Router();

// Settings Routes
router.post("/settings", createOrUpdateSettings);
router.get("/settings", getAllSettings);

module.exports = router;
