const express = require('express');
const router = express.Router();
const MealController = require('../controllers/mealController');

// Create a new meal record
router.post('/meal', MealController.createMeal);

// Get all meal records
router.get("/meals"s, MealController.getAllMeals);

// Get meal records by date
router.get('/meal/date/:date', MealController.getMealsByDate);

// Update a meal record by ID
router.put('/meal/:id', MealController.updateMeal);

// Delete a meal record by ID
router.delete('/meal/:id', MealController.deleteMeal);

module.exports = router;
