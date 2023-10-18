const Settings = require("../models/Settings");

// Get application settings (Admin)
exports.getApplicationSettings = async (req, res) => {
  try {
    // Retrieve the application settings
    const settings = await Settings.findOne({});
    if (!settings) {
      return { message: "Settings not found" };
    }
    return settings;
  } catch (error) {
    return { message: "Failed to fetch application settings" };
  }
};

// Update application settings (Admin)
exports.updateApplicationSettings = async (req, res) => {
  try {
    const updatedSettingsData = req.body;

    // Check if there are existing settings; if not, create new settings
    const settings = await Settings.findOne({});
    if (!settings) {
      const newSettings = new Settings(updatedSettingsData);
      await newSettings.save();
      return { message: "Create new settings successful", newSettings };
    } else {
      // Update the existing settings
      const updatedSettings = await Settings.findByIdAndUpdate(
        settings._id,
        updatedSettingsData,
        {
          new: true,
        }
      );
      return { message: "Updated settings successful", updatedSettings };
    }
  } catch (error) {
    return { message: "Failed to update application settings" };
  }
};
