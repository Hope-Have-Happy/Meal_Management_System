const express = require('express');
const router = express.Router();
const MonthlyMealRateController = require('../controllers/monthlyMealRateController');

// Create a new monthly meal rate entry
router.post('/', MonthlyMealRateController.createMonthlyMealRate);

// Get all monthly meal rate entries
router.get('/', MonthlyMealRateController.getAllMonthlyMealRates);

// Get monthly meal rate entries by date
router.get('/date/:date', MonthlyMealRateController.getMonthlyMealRatesByDate);

// Update a monthly meal rate entry by ID
router.put('/:id', MonthlyMealRateController.updateMonthlyMealRate);

// Delete a monthly meal rate entry by ID
router.delete('/:id', MonthlyMealRateController.deleteMonthlyMealRate);

module.exports = router;
