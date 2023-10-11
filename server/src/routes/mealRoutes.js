const express = require("express");
const router = express.Router();

const MealController = require("../controllers/MealController");

// Meal Registration
// Register meals for users
router.post("/meals", MealController.registerMeals);

// Get all meals
router.get("/meals", MealController.getAllMeals);

// Get a meal by ID
router.get("/meals/:id", MealController.getMealById);

// Update a meal
router.put("/meals/:id", MealController.updateMeal);

// Delete a meal
router.delete("/meals/:id", MealController.deleteMeal);

module.exports = router;
