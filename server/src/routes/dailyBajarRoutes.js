const express = require('express');
const router = express.Router();
const DailyBajarController = require('../controllers/dailyBajarController');

// Create a new daily bajar entry
router.post('/', DailyBajarController.createDailyBajar);

// Get all daily bajar entries
router.get('/', DailyBajarController.getAllDailyBajars);

// Get daily bajar entries by date
router.get('/date/:date', DailyBajarController.getDailyBajarsByDate);

// Update a daily bajar entry by ID
router.put('/:id', DailyBajarController.updateDailyBajar);

// Delete a daily bajar entry by ID
router.delete('/:id', DailyBajarController.deleteDailyBajar);

module.exports = router;
