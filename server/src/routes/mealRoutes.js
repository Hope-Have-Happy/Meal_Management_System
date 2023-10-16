// Import Express and create an Express Router for defining routes
const express = require("express");
const router = express.Router();

// Import the Meal Controller for meal-related logic
const MealController = require("../controllers/MealController");
const { isLoggedIn, isAdmin } = require("../middlewares/authMiddleware");

// Register meals for users (Admin) (Multiple or single)
router.post("/meals", isLoggedIn, isAdmin, MealController.registerMeals);

// Get all meals (Admin)
router.get("/meals", isLoggedIn, isAdmin, MealController.getAllMeals);

// Get all meals of logged in user's (View a list of meals)
router.get("/my-meals", isLoggedIn, MealController.getMyMealList);

// Confirm meals of users
router.post("/meals/confirm", isLoggedIn, isAdmin, MealController.confirmMealS);

// Get a meal by ID (Admin)
router.get("/meals/:id", isLoggedIn, isAdmin, MealController.getMealById);

// Update a meal (Admin)
router.put("/meals/:id", isLoggedIn, isAdmin, MealController.updateMeal);

// Delete a meal (Admin)
router.delete("/meals/:id", isLoggedIn, isAdmin, MealController.deleteMeal);

// Reserve meals for the next day until 6 PM (User)
router.post("/meals/reserve", isLoggedIn, MealController.reserveMeals);

// List and cancel bookings for the next day before 6 PM (User)
router.get("/meals/bookings", isLoggedIn, MealController.getUserBookings);
router.delete("/meals/bookings/:id", isLoggedIn, MealController.cancelBooking);

module.exports = router;
