const express = require("express");
const router = express.Router();

const MealRateController = require("../controllers/MealRateController");

// Meal Rate Management
// Set meal rates for specific months
router.post("/meal-rates", MealRateController.setMealRate);

// Get all meal rates
router.get("/meal-rates", MealRateController.getAllMealRates);

// Get a meal rate by ID
router.get("/meal-rates/:id", MealRateController.getMealRateById);

// Update a meal rate
router.put("/meal-rates/:id", MealRateController.updateMealRate);

// Delete a meal rate
router.delete("/meal-rates/:id", MealRateController.deleteMealRate);

module.exports = router;
