// services/userDashboardService.js

const User = require('../models/User');
const Payment = require('../models/Payment');
const MealBooking = require('../models/MealBooking');
const MonthlyMealRate = require('../models/MonthlyMealRate');

// Helper function to calculate Total Cash for a user using aggregation
const calculateTotalCash = async (userId) => {
  const totalCashPipeline = [
    {
      $match: {
        creator: userId,
      },
    },
    {
      $group: {
        _id: null,
        totalCash: {
          $sum: "$amount",
        },
      },
    },
  ];

  const result = await Payment.aggregate(totalCashPipeline);

  if (result.length > 0) {
    return result[0].totalCash || 0;
  } else {
    return 0;
  }
};

// Helper function to calculate Total Due for a user using aggregation
const calculateTotalDue = async (userId) => {
  const dueCashPipeline = [
    {
      $match: {
        users_id: userId,
        is_income: false,
      },
    },
    {
      $group: {
        _id: null,
        dueCash: {
          $sum: "$amount",
        },
      },
    },
  ];

  const result = await UserPayment.aggregate(dueCashPipeline);

  if (result.length > 0) {
    return result[0].dueCash || 0;
  } else {
    return 0;
  }
};

// Helper function to calculate Total Meals for the current month for a user using aggregation
const calculateTotalMeals = async (userId) => {
  const thisMonth = new Date();
  thisMonth.setDate(1); // Set the date to the 1st day of the current month

  const totalMealsPipeline = [
    {
      $match: {
        users_id: userId,
        date: {
          $gte: thisMonth,
        },
      },
    },
    {
      $group: {
        _id: null,
        totalMeals: {
          $sum: "$qty",
        },
      },
    },
  ];

  const result = await UserMeal.aggregate(totalMealsPipeline);

  if (result.length > 0) {
    return result[0].totalMeals || 0;
  } else {
    return 0;
  }
};

// Helper function to fetch last month's meal rate
const getLastMonthMealRate = async () => {
  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1); // Set the date to the last month

  const lastMonthMealRatePipeline = [
    {
      $match: {
        month: lastMonth,
      },
    },
    {
      $group: {
        _id: null,
        lastMonthMealRate: {
          $avg: "$meal_rate",
        },
      },
    },
  ];

  const result = await MonthlyMealRate.aggregate(lastMonthMealRatePipeline);

  if (result.length > 0) {
    return result[0].lastMonthMealRate || 0;
  } else {
    return 0;
  }
};

// Helper function to calculate Dues by Month for a user using aggregation
const calculateDuesByMonth = async (userId) => {
    const duesByMonthPipeline = [
      {
        $match: {
          users_id: userId,
          is_income: false,
        },
      },
      {
        $group: {
          _id: {
            year: { $year: "$date" },
            month: { $month: "$date" },
          },
          totalDues: {
            $sum: "$amount",
          },
        },
      },
    ];
  
    return await UserPayment.aggregate(duesByMonthPipeline);
  };

module.exports = {
  calculateTotalCash,
  calculateTotalDue,
  calculateTotalMeals,
  getLastMonthMealRate,
  calculateDuesByMonth
};
