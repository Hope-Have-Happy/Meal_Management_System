const dashboardService = require('../services/dashboardService');
const User = require('../models/User');

// Get data for the Admin Dashboard
exports.getAdminDashboardData = async (req, res) => {
  try {
    // Calculate Total Cash
    const totalCash = await dashboardService.calculateTotalCash();

    // Calculate Due Cash
    const dueCash = await dashboardService.calculateDueCash();

    // Calculate Extra Cash
    const extraCash = await dashboardService.calculateExtraCash();

    // Calculate This Month's Total Expense
    const totalExpense = await dashboardService.calculateTotalExpense();

    // Calculate Total User Count
    const totalUsers = await User.countDocuments();

    // Calculate This Month's Current Meal Rate
    const currentMealRate = await dashboardService.getCurrentMonthMealRate();

    // Calculate This Year's Average Meal Rate
    const averageMealRate = await dashboardService.calculateAverageMealRate();

    // Prepare the dashboard data object
    const dashboardData = {
      totalCash,
      dueCash,
      extraCash,
      totalExpense,
      totalUsers,
      currentMealRate,
      averageMealRate,
    };

    res.status(200).json(dashboardData);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching Admin Dashboard data' });
  }
};
