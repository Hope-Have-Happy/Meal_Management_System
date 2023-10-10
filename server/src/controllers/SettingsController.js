const express = require("express");
const Settings = require("../models/Settings"); // Import the Settings model
const router = express.Router();

// Create or update system settings (Admin functionality) (ডকের মধ্যে এই controller নিয়ে তেমন details পাই নি)
const createOrUpdateSettings = async (req, res) => {
  try {
    // Extract settings data from the request body
    const {
      shut_down_app,
      shut_down_reason,
      contact_name,
      contact_number,
      meat_set_last_time,
      meal_set_alert_time,
      alert_text_for_all,
      today_meal_coocking_end_time,
    } = req.body;

    // Check if system settings already exist in the database
    const existingSettings = await Settings.findOne();

    if (existingSettings) {
      // If settings exist, update them
      await Settings.findByIdAndUpdate(existingSettings._id, {
        shut_down_app,
        shut_down_reason,
        contact_name,
        contact_number,
        meat_set_last_time,
        meal_set_alert_time,
        alert_text_for_all,
        today_meal_coocking_end_time,
      });

      return res
        .status(200)
        .json({ message: "System settings updated successfully" });
    } else {
      // If settings don't exist, create a new Settings document with the provided data and insert it into the database
      await Settings.create({
        shut_down_app,
        shut_down_reason,
        contact_name,
        contact_number,
        meat_set_last_time,
        meal_set_alert_time,
        alert_text_for_all,
        today_meal_coocking_end_time,
      });

      return res
        .status(201)
        .json({ message: "System settings created successfully" });
    }
  } catch (error) {
    // Handle any errors that occur during system settings creation/update
    console.error("Error creating/updating system settings:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Read system settings (Admin functionality) (ডকের মধ্যে এই controller নিয়ে তেমন details পাই নি)
const getAllSettings = async (req, res) => {
  try {
    // Find the system settings document in the database
    const settings = await Settings.findOne();

    if (!settings) {
      return res.status(404).json({ error: "System settings not found" });
    }

    // Return the system settings in the response
    return res.status(200).json(settings);
  } catch (error) {
    // Handle any errors that occur during system settings retrieval
    console.error("Error retrieving system settings:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createOrUpdateSettings,
  getAllSettings,
};
