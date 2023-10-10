const express = require('express');
const router = express.Router();
const UserSettingsController = require('../controllers/userSettingsController');

// User settings update route
router.put('/', UserSettingsController.updateUserSettings);

module.exports = router;
