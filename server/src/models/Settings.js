const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
  {
    shut_down_app: {
      type: Number,
      default: null,
    },
    shut_down_reason: {
      type: String,
      maxlength: 45, // Set the maximum length to 45 characters
    },
    contact_name: {
      type: String,
      maxlength: 45, // Set the maximum length to 45 characters
    },
    contact_number: {
      type: String,
      maxlength: 20, // Set the maximum length to 20 characters
    },
    meat_set_last_time: {
      type: Date,
      default: null,
    },
    meal_set_alert_time: {
      type: Date,
      default: null,
    },
    alert_text_for_all: String,
    today_meal_coocking_end_time: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

const Settings = mongoose.model("Settings", settingsSchema);

module.exports = Settings;
