const User = require('../models/User');
const MealBooking = require('../models/MealBooking');
const Payment = require('../models/Payment');
const MonthlyMealRate = require('../models/MonthlyMealRate');

// Get data for the User Dashboard
exports.getUserDashboardData = async (req, res) => {
  try {
    // Get user ID from the request (assuming it's stored in req.user.id)
    const userId = req.user.id;

    // Fetch user information
    const user = await User.findById(userId);

    // Calculate Total Cash (Assuming you have a function for this)
    const totalCash = await calculateTotalCash(userId);

    // Calculate Total Due (Assuming you have a function for this)
    const totalDue = await calculateTotalDue(userId);

    // Calculate Total Meals for the current month
    const totalMeals = await calculateTotalMeals(userId);

    // Fetch last month's meal rate (Assuming you have a function for this)
    const lastMonthMealRate = await getLastMonthMealRate();
    
    // Calculate Total individual month's due
    const duesByMonthData = await calculateDuesByMonth();


    // Prepare the dashboard data object
    const dashboardData = {
      user: {
        full_name: user.full_name,
        email: user.email,
        mobile: user.mobile,
        department: user.department,
        address: user.address,
      },
      totalCash,
      totalDue,
      duesByMonthData,
      totalMeals,
      lastMonthMealRate,
    };

    res.status(200).json(dashboardData);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching User Dashboard data' });
  }
};
