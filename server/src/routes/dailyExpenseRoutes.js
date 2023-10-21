// Import Express and create an Express Router for defining routes
const express = require("express");
const router = express.Router();

// Import the Daily Expense Controller for daily-expense-related logic
const DailyExpenseController = require("../controllers/DailyExpenseController");
const { isLoggedIn, isAdmin } = require("../middlewares/authMiddleware");

// Add daily expenses (Admin)
router.post(
  "/expenses",
  isLoggedIn,
  isAdmin,
  DailyExpenseController.addExpense
);

// Get all daily expenses (Admin)
router.get(
  "/expenses",
  isLoggedIn,
  isAdmin,
  DailyExpenseController.getAllExpenses
);

// Get a daily expense by ID (Admin)
router.get(
  "/expenses/:id",
  isLoggedIn,
  isAdmin,
  DailyExpenseController.getExpenseById
);

// Update a daily expense (Admin)
router.put(
  "/expenses/:id",
  isLoggedIn,
  isAdmin,
  DailyExpenseController.updateExpense
);

// Delete a daily expense (Admin)
router.delete(
  "/expenses/:id",
  isLoggedIn,
  isAdmin,
  DailyExpenseController.deleteExpense
);

module.exports = router;
