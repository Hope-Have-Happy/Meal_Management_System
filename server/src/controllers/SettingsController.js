const {
  getApplicationSettings,
  updateApplicationSettings,
} = require("../services/settingsServices");

const SettingsController = {
  // Get application settings (Admin and User)
  getSettings: async (req, res) => {
    let result = await getApplicationSettings(req);
    return res.status(200).json(result);
  },

  // Update application settings (Admin)
  updateSettings: async (req, res) => {
    let result = await updateApplicationSettings(req);
    return res.status(200).json(result);
  },
};

module.exports = SettingsController;
