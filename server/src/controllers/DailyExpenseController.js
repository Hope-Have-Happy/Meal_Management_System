const DailyBajars = require("../models/dailyBajars");

const DailyExpenseController = {
  // Add daily expenses (Admin and User)
  addExpense: async (req, res) => {
    try {
      const expenseData = req.body;
      const expense = await DailyBajars.create(expenseData); // Use Model.create() to create a new expense
      res.status(201).json(expense);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Expense addition failed" });
    }
  },

  // Get all daily expenses (Admin and User)
  getAllExpenses: async (req, res) => {
    try {
      const expenses = await DailyBajars.find();
      res.status(200).json(expenses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch expenses" });
    }
  },

  // Get a daily expense by ID (Admin and User)
  getExpenseById: async (req, res) => {
    try {
      const expenseId = req.params.id;
      const expense = await DailyBajars.findById(expenseId);
      if (!expense) {
        return res.status(404).json({ message: "Expense not found" });
      }
      res.status(200).json(expense);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch expense" });
    }
  },

  // Update a daily expense (Admin and User)
  updateExpense: async (req, res) => {
    try {
      const expenseId = req.params.id;
      const updatedExpenseData = req.body;
      const expense = await DailyBajars.findByIdAndUpdate(
        expenseId,
        updatedExpenseData,
        { new: true }
      );
      if (!expense) {
        return res.status(404).json({ message: "Expense not found" });
      }
      res.status(200).json(expense);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to update expense" });
    }
  },

  // Delete a daily expense (Admin and User)
  deleteExpense: async (req, res) => {
    try {
      const expenseId = req.params.id;
      const expense = await DailyBajars.findByIdAndDelete(expenseId);
      if (!expense) {
        return res.status(404).json({ message: "Expense not found" });
      }
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to delete expense" });
    }
  },
};

module.exports = DailyExpenseController;
