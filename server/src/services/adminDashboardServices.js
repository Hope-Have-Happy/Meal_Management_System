// Admin Dashboard (Admin)
const UserPayments = require("../models/userPayments");
const DailyBajars = require("../models/dailyBajars");
const MonthlyMealRates = require("../models/monthlyMealRates");
const User = require("../models/user");

exports.get_dash_board_data = async (req, res) => {
  try {
    // Calculate Total Cash
    const totalCash = await UserPayments.aggregate([
      {
        $match: { status: 1 }, // Active or paid payments
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" },
        },
      },
    ]);

    // Calculate Due Cash
    const dueCash = await UserPayments.aggregate([
      {
        $match: { status: 0 }, // Inactive or due payments
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" },
        },
      },
    ]);

    // Calculate Extra Cash
    const extraCash = totalCash[0]?.total - dueCash[0]?.total;

    // Calculate This Month Total Expense
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth, 0);

    const thisMonthTotalExpense = await DailyBajars.aggregate([
      {
        $match: {
          bajar_date: { $gte: firstDayOfMonth, $lte: lastDayOfMonth },
        },
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$total" },
        },
      },
    ]);

    // Count Total Users
    const totalUsers = await User.countDocuments({ user_role: "User" });

    // Find This Month Current Meal Rate
    const thisMonthRate = await MonthlyMealRates.findOne({
      month: `${currentDate.toLocaleString("default", {
        month: "long",
      })}-${currentYear}`,
    });

    // Calculate This Year Average Meal Rate
    const currentYearStart = new Date(currentYear, 0, 1);
    const currentYearEnd = new Date(currentYear, 11, 31);
    const thisYearMealRates = await MonthlyMealRates.find({
      month_start_date: { $gte: currentYearStart },
      month_end_date: { $lte: currentYearEnd },
    });

    let sumMealRates = 0;
    thisYearMealRates.forEach((mealRate) => {
      sumMealRates += mealRate.meal_rate;
    });
    const averageMealRate =
      thisYearMealRates.length > 0
        ? sumMealRates / thisYearMealRates.length
        : 0;

    return {
      totalCash: totalCash[0]?.total || 0,
      dueCash: dueCash[0]?.total || 0,
      extraCash: extraCash || 0,
      thisMonthTotalExpense: thisMonthTotalExpense[0]?.total || 0,
      totalUsers: totalUsers,
      thisMonthMealRate: thisMonthRate ? thisMonthRate.meal_rate : 0,
      thisYearAverageMealRate: averageMealRate,
    };
  } catch (error) {
    return { error: "Server error" };
  }
};
