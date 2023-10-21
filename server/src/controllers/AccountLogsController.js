// Account Logs CRUD Related Services

const AccountLogsController = {
  // Add account logs (Admin)
  addAccountLogs: async (req, res) => {
    let result = await add_account_logs(req);
    return res.status(200).json(result);
  },

  // Get all account logs (Admin)
  getAllAccountLogs: async (req, res) => {
    let result = await get_all_account_logs(req);
    return res.status(200).json(result);
  },

  // Get a account log by ID (Admin)
  getAccountLogsById: async (req, res) => {
    let result = await get_account_logs_by_id(req);
    return res.status(200).json(result);
  },

  // Update a account log (Admin)
  updateAccountLogs: async (req, res) => {
    let result = await update_account_logs(req);
    return res.status(200).json(result);
  },

  // Delete a account log (Admin)
  deleteAccountLogs: async (req, res) => {
    let result = await delete_account_logs(req);
    return res.status(200).json(result);
  },
};

module.exports = AccountLogsController;
