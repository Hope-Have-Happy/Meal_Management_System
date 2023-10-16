const User = require("../models/user");
const UserMeals = require("../models/userMeals");

// Register meals for the users(Multiple or single meal register)
exports.registerMeal = async (req, res) => {
  try {
    const mealData = req.body; // Assuming meal data is sent in the request body

    // Validate meal data, check if users array is present and not empty
    if (!mealData.users || mealData.users.length === 0) {
      return { message: "Users array is required and should not be empty" };
    }

    // Check if there is an existing meal on the specified date for any of the users
    const existingMeals = await UserMeals.find({
      users_id: { $in: mealData.users }, // Check for any user in the list
      date: mealData.date,
    });

    const registeredMeals = [];
    const conflictingUsers = [];

    for (const userId of mealData.users) {
      const isRegistered = existingMeals.some((meal) =>
        meal.users_id.equals(userId)
      );

      if (isRegistered) {
        conflictingUsers.push(userId);
      } else {
        const newMeal = new UserMeals({
          users_id: userId,
          qty: mealData.qty,
          date: mealData.date,
          status: mealData.status || 1, // Default status if not provided
          creator: req.userInfo.user._id,
        });

        const savedMeal = await newMeal.save();
        registeredMeals.push(savedMeal);
      }
    }

    if (conflictingUsers.length > 0) {
      // Some users already have meals registered
      const conflictingUsersDetails = await User.find(
        { _id: { $in: conflictingUsers } },
        {
          _id: 1,
          full_name: 1,
          email: 1,
          mobile: 1,
        }
      );

      return {
        message: `Meal(s) already registered for user(s) on ${mealData.date}.`,
        alreadyRegisterUserMeal: conflictingUsersDetails,
        successfullyRegisteredMeals: registeredMeals,
      };
    }

    return {
      message: "Meals registered successfully",
      successfullyRegisteredMeals: registeredMeals,
    };
  } catch (error) {
    console.error(error);
    return { error: "Failed to register meals" };
  }
};
