const AccountLog = require('../models/AccountLog');

// Create a new account log entry
exports.createAccountLog = async (req, res) => {
  try {
    const { amount, is_expense, is_income, income_date, category } = req.body;
    const newAccountLog = new AccountLog({
      amount,
      is_expense,
      is_income,
      income_date,
      category,
    });
    await newAccountLog.save();
    res.status(201).json(newAccountLog);
  } catch (error) {
    res.status(500).json({ error: 'Error creating account log entry' });
  }
};

// Get all account log entries
exports.getAllAccountLogs = async (req, res) => {
  try {
    const accountLogs = await AccountLog.find();
    res.status(200).json(accountLogs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching account log entries' });
  }
};

// Get account log entries by date
exports.getAccountLogsByDate = async (req, res) => {
  try {
    const { date } = req.params;
    const accountLogs = await AccountLog.find({ income_date: date });
    res.status(200).json(accountLogs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching account log entries by date' });
  }
};

// Update an account log entry by ID
exports.updateAccountLog = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAccountLog = await AccountLog.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedAccountLog) {
      return res.status(404).json({ error: 'Account log entry not found' });
    }
    res.status(200).json(updatedAccountLog);
  } catch (error) {
    res.status(500).json({ error: 'Error updating account log entry' });
  }
};

// Delete an account log entry by ID
exports.deleteAccountLog = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAccountLog = await AccountLog.findByIdAndRemove(id);
    if (!deletedAccountLog) {
      return res.status(404).json({ error: 'Account log entry not found' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting account log entry' });
  }
};
