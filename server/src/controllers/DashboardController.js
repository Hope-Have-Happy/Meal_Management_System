// Admin Dashboard Related Services
const { get_dash_board_data } = require("../services/adminDashboardServices");

const DashboardController = {
  getDashboardData: async (req, res) => {
    let result = await get_dash_board_data(req);
    return res.status(200).json(result);
  },
};

module.exports = DashboardController;
