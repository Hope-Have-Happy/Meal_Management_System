// adminDashboardController.js

const dashboardService = require("../services/dashboardService");

// Admin dashboard statistics controller
const getAdminDashboardStats = async (req, res) => {
  try {
    // Calculate dashboard statistics
    const totalCash = await dashboardService.calculateTotalCash();
    const dueCash = await dashboardService.calculateDueCash();
    const extraCash = await dashboardService.calculateExtraCash();
    const thisMonthTotalExpense =
      await dashboardService.calculateThisMonthTotalExpense();
    const totalUsers = await dashboardService.calculateTotalUsers();
    const thisMonthCurrentMealRate =
      await dashboardService.calculateThisMonthCurrentMealRate();
    const thisYearAverageMealRate =
      await dashboardService.calculateThisYearAverageMealRate();
    const totalMeals = await dashboardService.calculateTotalMeals();

    // Create an object to hold the dashboard statistics
    const dashboardStats = {
      totalCash,
      dueCash,
      extraCash,
      thisMonthTotalExpense,
      totalUsers,
      thisMonthCurrentMealRate,
      thisYearAverageMealRate,
      totalMeals,
    };

    // Return the dashboard statistics in the response
    return res.status(200).json(dashboardStats);
  } catch (error) {
    // Handle any errors that occur while calculating dashboard statistics
    console.error("Error calculating dashboard statistics:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAdminDashboardStats };
