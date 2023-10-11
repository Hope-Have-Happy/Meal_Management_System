const AccountLogs = require("../models/accountLogs");
const User = require("../models/user");
const MonthlyMealRates = require("../models/monthlyMealRates");

const DashboardController = {
  getDashboardData: async (req, res) => {
    try {
      // Calculate the current month and year
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();

      // Aggregation pipeline for the dashboard data
      const pipeline = [
        // Calculate the total cash
        {
          $group: {
            _id: null,
            totalCash: {
              $sum: {
                $cond: [
                  { $eq: ['$is_income', 1] },
                  '$amount',
                  { $multiply: ['$amount', -1] },
                ],
              },
            },
          },
        },
        // Calculate the due cash
        {
          $group: {
            _id: null,
            dueCash: { $sum: '$amount' },
          },
        },
        // Calculate the extra cash
        {
          $addFields: {
            extraCash: { $subtract: ['$totalCash', '$dueCash'] },
          },
        },
        // Calculate this month's total expense
        {
          $match: {
            is_expense: 1,
            income_date: { $gte: new Date(currentYear, currentMonth, 1) },
          },
        },
        {
          $group: {
            _id: null,
            thisMonthTotalExpense: { $sum: '$amount' },
          },
        },
        // Count the total number of users
        {
          $count: 'totalUsers',
        },
        // Find this month's meal rate
        {
          $lookup: {
            from: 'monthlymealrates',
            let: { month: new Date(currentYear, currentMonth, 1) },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: { $year: '$month' }, { $year: '$$month' } },
                      { $eq: { $month: '$month' }, { $month: '$$month' } },
                    ],
                  },
                },
              },
              {
                $sort: { month: 1 },
              },
              {
                $limit: 1,
              },
              {
                $project: {
                  _id: 0,
                  meal_rate: 1,
                },
              },
            ],
            as: 'thisMonthMealRate',
          },
        },
        // Calculate this year's average meal rate
        {
          $group: {
            _id: { $year: '$month' },
            averageMealRate: { $avg: '$meal_rate' },
          },
        },
      ];

      const dashboardData = await AccountLogs.aggregate(pipeline).exec();

      res.json(dashboardData[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
}

module.exports = DashboardController;
