const express = require("express");
const router = express.Router();

const MealController = require("../controllers/MealController");

// Register meals for users (Admin)
router.post("/meals", MealController.registerMeals);

// Get all meals (Admin and User)
router.get("/meals", MealController.getAllMeals);

// Get a meal by ID (Admin and User)
router.get("/meals/:id", MealController.getMealById);

// Update a meal (Admin)
router.put("/meals/:id", MealController.updateMeal);

// Delete a meal (Admin)
router.delete("/meals/:id", MealController.deleteMeal);

module.exports = router;
