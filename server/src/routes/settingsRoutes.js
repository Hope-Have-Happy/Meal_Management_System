// Example routes for settings
const express = require('express');
const router = express.Router();
const SettingsController = require('../controllers/settingsController');

// Create a new settings record
router.post('/', SettingsController.createSettings);

// Get settings by ID
router.get('/:id', SettingsController.getSettingsById);

// Update settings by ID
router.put('/:id', SettingsController.updateSettings);

// Delete settings by ID
router.delete('/:id', SettingsController.deleteSettings);

module.exports = router;
