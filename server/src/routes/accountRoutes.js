const express = require("express");
const router = express.Router();

const AccountController = require("../controllers/AccountController");

// Account and Expenses Management
// Add a new account entry
router.post("/accounts", AccountController.addAccount);

// Get all accounts
router.get("/accounts", AccountController.getAllAccounts);

// Get an account entry by ID
router.get("/accounts/:id", AccountController.getAccountById);

// Update an account entry
router.put("/accounts/:id", AccountController.updateAccount);

// Delete an account entry
router.delete("/accounts/:id", AccountController.deleteAccount);

// Daily Expenses
// Add daily expenses
router.post("/expenses", AccountController.addExpense);

// Get all daily expenses
router.get("/expenses", AccountController.getAllExpenses);

// Get a daily expense by ID
router.get("/expenses/:id", AccountController.getExpenseById);

// Update a daily expense
router.put("/expenses/:id", AccountController.updateExpense);

// Delete a daily expense
router.delete("/expenses/:id", AccountController.deleteExpense);

module.exports = router;
