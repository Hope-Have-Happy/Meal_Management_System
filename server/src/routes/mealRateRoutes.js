const express = require("express");
const router = express.Router();

const MealRateController = require("../controllers/MealRateController");

// Set meal rates for specific months (Admin)
router.post("/meal-rates", MealRateController.setMealRate);

// Get all meal rates (Admin and User)
router.get("/meal-rates", MealRateController.getAllMealRates);

// Get a meal rate by ID (Admin and User)
router.get("/meal-rates/:id", MealRateController.getMealRateById);

// Update a meal rate (Admin)
router.put("/meal-rates/:id", MealRateController.updateMealRate);

// Delete a meal rate (Admin)
router.delete("/meal-rates/:id", MealRateController.deleteMealRate);

module.exports = router;
