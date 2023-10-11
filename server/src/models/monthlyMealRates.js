const mongoose = require("mongoose");

const monthlyMealRatesSchema = new mongoose.Schema(
  {
    month: { type: Date },
    meal_rate: { type: Number },
    is_visible: { type: Number },
    month_start_date: { type: Date },
    month_end_date: { type: Date },
    status: { type: Number, default: 1 },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const MonthlyMealRates = mongoose.model(
  "MonthlyMealRates",
  monthlyMealRatesSchema
);

module.exports = MonthlyMealRates;
