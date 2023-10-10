const express = require('express');
const router = express.Router();
const MealController = require('../controllers/mealController');

// Create a new meal record
router.post('/', MealController.createMeal);

// Get all meal records
router.get('/', MealController.getAllMeals);

// Get meal records by date
router.get('/date/:date', MealController.getMealsByDate);

// Update a meal record by ID
router.put('/:id', MealController.updateMeal);

// Delete a meal record by ID
router.delete('/:id', MealController.deleteMeal);

module.exports = router;
