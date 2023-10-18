const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
  {
    shut_down_app: {
      type: Number,
    },
    shut_down_reason: {
      type: String,
    },
    contact_name: {
      type: String,
    },
    contact_number: {
      type: String,
    },
    meal_set_last_time: {
      type: String,
    },
    meal_set_alert_time: {
      type: String,
    },
    alert_text_for_all: {
      type: String,
    },
    today_meal_coocking_end_time: {
      type: String,
    },
  },
  { timestamps: true }
);

const Settings = mongoose.model("Settings", settingsSchema);

module.exports = Settings;
