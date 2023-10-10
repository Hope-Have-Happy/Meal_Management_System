// Import necessary controllers

const {
  createMonthlyMealRate,
  getAllMonthlyMealRates,
  getMonthlyMealRateById,
  updateMonthlyMealRate,
  deleteMonthlyMealRate,
} = require("../controllers/MonthlyMealRateController");

const express = require("express");
const router = express.Router();

// Monthly Meal Rate Routes
router.post("/monthly-meal-rates", createMonthlyMealRate);
router.get("/monthly-meal-rates", getAllMonthlyMealRates);
router.get("/monthly-meal-rates/:id", getMonthlyMealRateById);
router.put("/monthly-meal-rates/:id", updateMonthlyMealRate);
router.delete("/monthly-meal-rates/:id", deleteMonthlyMealRate);

module.exports = router;
