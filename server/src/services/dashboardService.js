// services/dashboardService.js
const AccountLog = require('../models/AccountLog');
const User = require('../models/User');
const MonthlyMealRate = require('../models/MonthlyMealRate');

// Helper function to calculate Total Cash
const calculateTotalCash = async () => {
  const totalCashPipeline = [
    {
      $group: {
        _id: null,
        totalCash: {
          $sum: "$amount"
        }
      }
    }
  ];

  const result = await AccountLog.aggregate(totalCashPipeline);

  if (result.length > 0) {
    return result[0].totalCash || 0;
  } else {
    return 0;
  }
};

// Helper function to calculate Due Cash
const calculateDueCash = async () => {
  const dueCashPipeline = [
    {
      $match: {
        is_income: false
      }
    },
    {
      $group: {
        _id: null,
        dueCash: {
          $sum: "$amount"
        }
      }
    }
  ];

  const result = await AccountLog.aggregate(dueCashPipeline);

  if (result.length > 0) {
    return result[0].dueCash || 0;
  } else {
    return 0;
  }
};

// Helper function to calculate Extra Cash
const calculateExtraCash = async () => {
  const extraCashPipeline = [
    {
      $match: {
        is_income: true
      }
    },
    {
      $group: {
        _id: null,
        extraCash: {
          $sum: "$amount"
        }
      }
    }
  ];

  const result = await AccountLog.aggregate(extraCashPipeline);

  if (result.length > 0) {
    return result[0].extraCash || 0;
  } else {
    return 0;
  }
};

// Helper function to calculate This Month's Total Expense
const calculateTotalExpense = async () => {
  const thisMonth = new Date();
  thisMonth.setDate(1); // Set the date to the 1st day of the current month

  const totalExpensePipeline = [
    {
      $match: {
        is_expense: true,
        income_date: {
          $gte: thisMonth
        }
      }
    },
    {
      $group: {
        _id: null,
        totalExpense: {
          $sum: "$amount"
        }
      }
    }
  ];

  const result = await AccountLog.aggregate(totalExpensePipeline);

  if (result.length > 0) {
    return result[0].totalExpense || 0;
  } else {
    return 0;
  }
};

// Helper function to calculate This Month's Current Meal Rate
const getCurrentMonthMealRate = async () => {
  const thisMonth = new Date();
  thisMonth.setDate(1); // Set the date to the 1st day of the current month

  const currentMonthMealRatePipeline = [
    {
      $match: {
        month: {
          $gte: thisMonth
        }
      }
    },
    {
      $group: {
        _id: null,
        averageMealRate: {
          $avg: "$meal_rate"
        }
      }
    }
  ];

  const result = await MonthlyMealRate.aggregate(currentMonthMealRatePipeline);

  if (result.length > 0) {
    return result[0].averageMealRate || 0;
  } else {
    return 0;
  }
};

// Helper function to calculate This Year's Average Meal Rate
const calculateAverageMealRate = async () => {
  const thisYear = new Date();
  thisYear.setMonth(0); // Set the month to January
  thisYear.setDate(1); // Set the date to the 1st day of the year

  const averageMealRatePipeline = [
    {
      $match: {
        month: {
          $gte: thisYear
        }
      }
    },
    {
      $group: {
        _id: null,
        averageMealRate: {
          $avg: "$meal_rate"
        }
      }
    }
  ];

  const result = await MonthlyMealRate.aggregate(averageMealRatePipeline);

  if (result.length > 0) {
    return result[0].averageMealRate || 0;
  } else {
    return 0;
  }
};

module.exports = {
  calculateTotalCash,
  calculateDueCash,
  calculateExtraCash,
  calculateTotalExpense,
  getCurrentMonthMealRate,
  calculateAverageMealRate
};
