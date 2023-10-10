const express = require("express");
const router = express.Router();
const MonthlyMealRateController = require("../controllers/monthlyMealRateController");

// Create a new monthly meal rate entry
router.post(
  "/monthly-meal-rate",
  MonthlyMealRateController.createMonthlyMealRate
);

// Get all monthly meal rate entries
router.get(
  "/monthly-meal-rates",
  MonthlyMealRateController.getAllMonthlyMealRates
);

// Get monthly meal rate entries by date
router.get(
  "/monthly-meal-rate/date/:date",
  MonthlyMealRateController.getMonthlyMealRatesByDate
);

// Update a monthly meal rate entry by ID
router.put(
  "/monthly-meal-rate/:id",
  MonthlyMealRateController.updateMonthlyMealRate
);

// Delete a monthly meal rate entry by ID
router.delete(
  "/monthly-meal-rate/:id",
  MonthlyMealRateController.deleteMonthlyMealRate
);

module.exports = router;
