const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
  {
    shut_down_app: {
      type: Number,
      required: true,
    },
    shut_down_reason: {
      type: String,
      required: true,
    },
    contact_name: {
      type: String,
      required: true,
    },
    contact_number: {
      type: String,
      required: true,
    },
    meal_set_last_time: {
      type: String,
      required: true,
    },
    meal_set_alert_time: {
      type: String,
      required: true,
    },
    alert_text_for_all: {
      type: String,
      required: true,
    },
    today_meal_cooking_end_time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Settings = mongoose.model("Settings", settingsSchema);

module.exports = Settings;
