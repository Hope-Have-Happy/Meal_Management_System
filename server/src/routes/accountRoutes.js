const express = require("express");
const router = express.Router();

const AccountController = require("../controllers/AccountController");

// Add a new account entry (Admin and User)
router.post("/accounts", AccountController.addAccount);

// Get all accounts (Admin and User)
router.get("/accounts", AccountController.getAllAccounts);

// Get an account entry by ID (Admin and User)
router.get("/accounts/:id", AccountController.getAccountById);

// Update an account entry (Admin and User)
router.put("/accounts/:id", AccountController.updateAccount);

// Delete an account entry (Admin and User)
router.delete("/accounts/:id", AccountController.deleteAccount);

// Add daily expenses (Admin and User)
router.post("/expenses", AccountController.addExpense);

// Get all daily expenses (Admin and User)
router.get("/expenses", AccountController.getAllExpenses);

// Get a daily expense by ID (Admin and User)
router.get("/expenses/:id", AccountController.getExpenseById);

// Update a daily expense (Admin and User)
router.put("/expenses/:id", AccountController.updateExpense);

// Delete a daily expense (Admin and User)
router.delete("/expenses/:id", AccountController.deleteExpense);

module.exports = router;
