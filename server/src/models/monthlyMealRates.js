const mongoose = require("mongoose");

const currentYear = new Date().getFullYear(); // Get the current year

const monthlyMealRatesSchema = new mongoose.Schema(
  {
    month: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          // Define a regular expression to match the expected format
          const regex = new RegExp(
            /^(January|February|March|April|May|June|July|August|September|October|November|December)-\d{4}$/
          );
          return regex.test(value);
        },
        error:
          "The 'month' field must be in the format 'Month-Year', e.g., 'January-2023'.",
      },
    },
    meal_rate: {
      type: Number,
      required: true,
    },
    is_visible: {
      type: Number,
      required: true,
    },
    month_start_date: {
      type: Date,
      required: true,
    },
    month_end_date: {
      type: Date,
      required: true,
    },
    status: {
      type: Number,
      default: 1,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const MonthlyMealRates = mongoose.model(
  "MonthlyMealRates",
  monthlyMealRatesSchema
);

module.exports = MonthlyMealRates;
