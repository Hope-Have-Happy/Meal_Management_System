const express = require('express');
const router = express.Router();
const MealMenuController = require('../controllers/mealMenuController');

// Create a new meal menu entry
router.post('/', MealMenuController.createMealMenu);

// Get all meal menu entries
router.get('/', MealMenuController.getAllMealMenus);

// Get meal menu entries by date
router.get('/date/:date', MealMenuController.getMealMenusByDate);

// Update a meal menu entry by ID
router.put('/:id', MealMenuController.updateMealMenu);

// Delete a meal menu entry by ID
router.delete('/:id', MealMenuController.deleteMealMenu);

module.exports = router;
