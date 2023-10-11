const Settings = require("../models/Settings");

const SettingsController = {
  // Get application settings (Admin and User)
  getSettings: async (req, res) => {
    try {
      // Retrieve the application settings
      const settings = await Settings.findOne({});
      if (!settings) {
        return res.status(404).json({ message: "Settings not found" });
      }
      res.status(200).json(settings);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch application settings" });
    }
  },

  // Update application settings (Admin)
  updateSettings: async (req, res) => {
    try {
      const updatedSettingsData = req.body;

      // Check if there are existing settings; if not, create new settings
      const settings = await Settings.findOne({});
      if (!settings) {
        const newSettings = new Settings(updatedSettingsData);
        await newSettings.save();
        res.status(201).json(newSettings);
      } else {
        // Update the existing settings
        const updatedSettings = await Settings.findByIdAndUpdate(
          settings._id,
          updatedSettingsData,
          {
            new: true,
          }
        );
        res.status(200).json(updatedSettings);
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Failed to update application settings" });
    }
  },
};

module.exports = SettingsController;
