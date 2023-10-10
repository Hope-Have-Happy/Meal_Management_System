const express = require('express');
const router = express.Router();
const MealBookingController = require('../controllers/mealBookingController');

// User meal booking route
router.post('/', MealBookingController.bookMeal);

// User meal booking list route
router.get('/list', MealBookingController.getMealBookingList);

// User meal booking cancellation route
router.delete('/:id', MealBookingController.cancelMealBooking);

module.exports = router;
