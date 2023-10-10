const express = require("express");
const router = express.Router();
const MealBookingController = require("../controllers/mealBookingController");

// User meal booking route
router.post("/meal-booking", MealBookingController.bookMeal);

// User meal booking list route
router.get("/meal-booking/list", MealBookingController.getMealBookingList);

// User meal booking cancellation route
router.delete("/meal-booking/:id", MealBookingController.cancelMealBooking);

module.exports = router;
