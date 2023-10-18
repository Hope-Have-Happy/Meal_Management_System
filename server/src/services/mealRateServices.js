const MonthlyMealRates = require("../models/monthlyMealRates");

// Set meal rates for specific months (Admin)

exports.set_a_meal_rate = async (req, res) => {
  try {
    // Extract the data from the request body
    const { month, meal_rate, is_visible, month_start_date, month_end_date } =
      req.body;

    // Check if a meal rate for the same month already exists
    const existingMealRate = await MonthlyMealRates.findOne({ month });

    if (existingMealRate) {
      return {
        message:
          "A meal rate for this month already exists. You cannot create a new one.",
      };
    }

    // Create a new MonthlyMealRates entry using the create method
    const newMealRate = await MonthlyMealRates.create({
      month,
      meal_rate,
      is_visible,
      month_start_date,
      month_end_date,
      creator: req.userInfo.user._id, // Assign the admin's user ID as the creator
    });

    return {
      message: "Meal rate set successfully",
      mealRate: newMealRate,
    };
  } catch (error) {
    return { error: "Failed to set the meal rate" };
  }
};

// Get all meal rates (Admin and User)
exports.get_all_meal_rate_list = async (req, res) => {
  try {
    const isAdmin = req.userInfo.user.user_role;
    const filter = isAdmin ? {} : { is_visible: 1 };

    const mealRates = await MonthlyMealRates.find(filter).sort({
      month: "desc",
    });

    return mealRates;
  } catch (error) {
    return { message: "Failed to fetch meal rates" };
  }
};
