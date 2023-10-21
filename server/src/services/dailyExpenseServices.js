const DailyBajars = require("./../models/dailyBajars");

// Add daily expenses (Admin)
exports.add_daily_expense = async (req, res) => {
  try {
    const { title, qty, unit, price, total, bajar_date } = req.body;

    // Create a new daily expense record
    const newExpense = new DailyBajars({
      title,
      qty,
      unit,
      price,
      total,
      bajar_date,
      creator: req.userInfo.user._id,
    });

    // Save the daily expense record to the database
    const savedExpense = await newExpense.save();

    return {
      message: "Daily expense added successfully",
      expense: savedExpense,
    };
  } catch (error) {
    return { message: "Failed to add daily expense" };
  }
};

// Get all daily expenses (Admin)
exports.get_all_daily_expense = async (req, res) => {
  try {
    // Find and return all daily expenses
    const expenses = await DailyBajars.find();
    return {
      message: "All daily expenses retrieved successfully",
      expenses,
    };
  } catch (error) {
    return { message: "Failed to retrieve daily expenses" };
  }
};

// Get a daily expense by ID (Admin)
exports.get_daily_expense_by_id = async (req, res) => {
  try {
    const expenseId = req.params.id; // Get the expense ID from the request parameters

    // Find the daily expense by ID
    const expense = await DailyBajars.findById(expenseId).exec();

    // Check if the expense exists
    if (!expense) {
      return { message: "Daily expense not found" };
    }

    return {
      message: "Daily expense retrieved successfully",
      expense,
    };
  } catch (error) {
    return { message: "Failed to retrieve daily expense" };
  }
};

// Update a daily expense (Admin)
exports.update_daily_expense = async (req, res) => {
  try {
    const expenseId = req.params.id; // Get the expense ID from the request parameters
    const { title, qty, unit, price, total, bajar_date } = req.body;

    // Find and update the daily expense by ID
    const updatedExpense = await DailyBajars.findByIdAndUpdate(
      expenseId,
      {
        title,
        qty,
        unit,
        price,
        total,
        bajar_date,
      },
      { new: true }
    );

    // Check if the expense exists
    if (!updatedExpense) {
      return { message: "Daily expense not found" };
    }

    return {
      message: "Daily expense updated successfully",
      expense: updatedExpense,
    };
  } catch (error) {
    return { message: "Failed to update daily expense" };
  }
};

// Delete a daily expense (Admin)
exports.delete_daily_expense = async (req, res) => {
  try {
    const expenseId = req.params.id; // Get the expense ID from the request parameters

    // Find and remove the daily expense by ID
    const deletedExpense = await DailyBajars.findByIdAndRemove(expenseId);

    // Check if the expense exists
    if (!deletedExpense) {
      return { message: "Daily expense not found" };
    }

    return {
      message: "Daily expense deleted successfully",
      expense: deletedExpense,
    };
  } catch (error) {
    return { message: "Failed to delete daily expense" };
  }
};
