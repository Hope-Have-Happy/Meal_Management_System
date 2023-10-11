// services/dashboardService.js

const User = require("../models/User");
const UserMeal = require("../models/UserMeal");
const UserPayment = require("../models/UserPayment"); // Import the UserPayment model

// Function to calculate total cash
async function calculateTotalCash() {
  try {
    const totalCashAggregate = await UserPayment.aggregate([
      {
        $group: {
          _id: null,
          totalCash: { $sum: "$amount" },
        },
      },
    ]);

    if (totalCashAggregate.length > 0) {
      return totalCashAggregate[0].totalCash || 0;
    } else {
      return 0;
    }
  } catch (error) {
    throw error;
  }
}

// Function to calculate due cash
async function calculateDueCash() {
  try {
    const dueCashAggregate = await UserPayment.aggregate([
      {
        $match: {
          payment_date: { $lt: new Date() }, // Payments made before today
        },
      },
      {
        $group: {
          _id: null,
          dueCash: { $sum: "$amount" },
        },
      },
    ]);

    if (dueCashAggregate.length > 0) {
      return dueCashAggregate[0].dueCash || 0;
    } else {
      return 0;
    }
  } catch (error) {
    throw error;
  }
}

// Function to calculate this month total expense
async function calculateThisMonthTotalExpense() {
  try {
    const startDate = new Date();
    startDate.setDate(1); // Set the start date to the first day of the current month

    const thisMonthTotalExpenseAggregate = await UserPayment.aggregate([
      {
        $match: {
          payment_date: { $gte: startDate, $lte: new Date() }, // Payments made within the current month
        },
      },
      {
        $group: {
          _id: null,
          thisMonthTotalExpense: { $sum: "$amount" },
        },
      },
    ]);

    if (thisMonthTotalExpenseAggregate.length > 0) {
      return thisMonthTotalExpenseAggregate[0].thisMonthTotalExpense || 0;
    } else {
      return 0;
    }
  } catch (error) {
    throw error;
  }
}

// Function to calculate extra cash
async function calculateExtraCash() {
  try {
    const totalCash = await calculateTotalCash();
    const dueCash = await calculateDueCash();

    return totalCash - dueCash;
  } catch (error) {
    throw error;
  }
}

// Function to calculate this month total expense
async function calculateThisMonthTotalExpense() {
  try {
    const startDate = new Date();
    startDate.setDate(1); // Set the start date to the first day of the current month

    const thisMonthTotalExpenseAggregate = await UserPayment.aggregate([
      {
        $match: {
          payment_date: { $gte: startDate, $lte: new Date() }, // Payments made within the current month
        },
      },
      {
        $group: {
          _id: null,
          thisMonthTotalExpense: { $sum: "$amount" },
        },
      },
    ]);

    if (thisMonthTotalExpenseAggregate.length > 0) {
      return thisMonthTotalExpenseAggregate[0].thisMonthTotalExpense || 0;
    } else {
      return 0;
    }
  } catch (error) {
    throw error;
  }
}

// Function to calculate total number of users
async function calculateTotalUsers() {
  try {
    const totalUsersCount = await User.countDocuments();

    return totalUsersCount;
  } catch (error) {
    throw error;
  }
}

// Function to calculate this month current meal rate
async function calculateThisMonthCurrentMealRate() {
  try {
    const thisMonthTotalExpense = await calculateThisMonthTotalExpense();
    const totalMeals = await calculateTotalMeals(); // You'll need to implement this function to calculate the total meals

    if (totalMeals === 0) {
      return 0; // Avoid division by zero
    }

    return thisMonthTotalExpense / totalMeals;
  } catch (error) {
    throw error;
  }
}

// Function to calculate total meals (you'll need to implement this function based on your data model)
async function calculateTotalMeals() {
  try {
    // Add your logic here to calculate the total number of meals
  } catch (error) {
    throw error;
  }
}

// Function to calculate this month current meal rate
async function calculateThisMonthCurrentMealRate() {
  try {
    const thisMonthTotalExpense = await calculateThisMonthTotalExpense();
    const totalMeals = await calculateTotalMeals(); // You'll need to implement this function to calculate the total meals

    if (totalMeals === 0) {
      return 0; // Avoid division by zero
    }

    return thisMonthTotalExpense / totalMeals;
  } catch (error) {
    throw error;
  }
}

// Function to calculate total meals
async function calculateTotalMeals() {
  try {
    const totalMealsAggregate = await UserMeal.aggregate([
      {
        $group: {
          _id: null,
          totalMeals: { $sum: "$qty" }, // Assuming you store the quantity of meals in the 'qty' field
        },
      },
    ]);

    if (totalMealsAggregate.length > 0) {
      return totalMealsAggregate[0].totalMeals || 0;
    } else {
      return 0;
    }
  } catch (error) {
    throw error;
  }
}

module.exports = {
  calculateTotalCash,
  calculateDueCash,
  calculateExtraCash,
  calculateThisMonthTotalExpense,
  calculateTotalUsers,
  calculateThisMonthCurrentMealRate,
  calculateTotalMeals,
};
