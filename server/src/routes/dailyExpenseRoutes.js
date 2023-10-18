// Import Express and create an Express Router for defining routes
const express = require("express");
const router = express.Router();

// Import the Daily Expense Controller for daily-expense-related logic
const DailyExpenseController = require("../controllers/DailyExpenseController");

// Add daily expenses (Admin and User)
router.post("/expenses", DailyExpenseController.addExpense);

// Get all daily expenses (Admin and User)
router.get("/expenses", DailyExpenseController.getAllExpenses);

// Get a daily expense by ID (Admin and User)
router.get("/expenses/:id", DailyExpenseController.getExpenseById);

// Update a daily expense (Admin and User)
router.put("/expenses/:id", DailyExpenseController.updateExpense);

// Delete a daily expense (Admin and User)
router.delete("/expenses/:id", DailyExpenseController.deleteExpense);

module.exports = router;
