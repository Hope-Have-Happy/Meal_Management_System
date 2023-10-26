// Import Express and create an Express Router for defining routes
const express = require("express");
const router = express.Router();

// Import the Monthly Meal Rate Controller for monthly-meal-rate-related logic
const MonthlyMealRateController = require("../controllers/MonthlyMealRateController");
const { isLoggedIn, isAdmin } = require("../middlewares/authMiddleware");
const {
  validateDataResult,
  validateMealRates,
} = require("../middlewares/validationMiddleware");

// Set meal rates for specific months (Admin)
router.post(
  "/meal-rates",
  isLoggedIn,
  isAdmin,
  validateMealRates,
  validateDataResult,
  MonthlyMealRateController.setMealRate
);

// Get all meal rates (Admin and User)
router.get(
  "/meal-rates",
  isLoggedIn,
  MonthlyMealRateController.getAllMealRates
);

// Get a meal rate by ID (Admin)
router.get(
  "/meal-rates/:id",
  isLoggedIn,
  isAdmin,
  MonthlyMealRateController.getMealRateById
);

// Update a meal rate (Admin)
router.put(
  "/meal-rates/:id",
  isLoggedIn,
  isAdmin,
  MonthlyMealRateController.updateMealRate
);

// Delete a meal rate (Admin)
router.delete(
  "/meal-rates/:id",
  isLoggedIn,
  isAdmin,
  MonthlyMealRateController.deleteMealRate
);

module.exports = router;
