const mongoose = require('mongoose');

const monthlyMealRateSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.BigInt,
    required: true,
    unique: true,
  },
  month: Date,
  meal_rate: Number,
  is_visible: {
    type: Boolean,
    default: true,
  },
  month_start_date: Date,
  month_end_date: Date,
  status: {
    type: Number,
    default: 1,
  },
  creator: {
    type: mongoose.Schema.Types.BigInt,
    default: null,
  },
}, { timestamps: true });

const MonthlyMealRate = mongoose.model('MonthlyMealRate', monthlyMealRateSchema);

module.exports = MonthlyMealRate;
