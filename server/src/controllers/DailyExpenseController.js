// Daily Expense CRUD Related Services
const {
  add_daily_expense,
  get_all_daily_expense,
  get_daily_expense_by_id,
  update_daily_expense,
  delete_daily_expense,
} = require("../services/dailyExpenseServices");

const DailyExpenseController = {
  // Add daily expenses (Admin)
  addExpense: async (req, res) => {
    let result = await add_daily_expense(req);
    return res.status(200).json(result);
  },

  // Get all daily expenses (Admin)
  getAllExpenses: async (req, res) => {
    let result = await get_all_daily_expense(req);
    return res.status(200).json(result);
  },

  // Get a daily expense by ID (Admin)
  getExpenseById: async (req, res) => {
    let result = await get_daily_expense_by_id(req);
    return res.status(200).json(result);
  },

  // Update a daily expense (Admin)
  updateExpense: async (req, res) => {
    let result = await update_daily_expense(req);
    return res.status(200).json(result);
  },

  // Delete a daily expense (Admin)
  deleteExpense: async (req, res) => {
    let result = await delete_daily_expense(req);
    return res.status(200).json(result);
  },
};

module.exports = DailyExpenseController;
