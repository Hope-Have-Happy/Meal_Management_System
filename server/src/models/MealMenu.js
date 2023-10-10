const mongoose = require('mongoose');

const mealMenuSchema = new mongoose.Schema({
  meal_date: Date,
  description: String,
  receipy: String,
  status: {
    type: Number,
    default: 1,
  },
  creator: mongoose.Schema.Types.ObjectId,
}, { timestamps: true });

const MealMenu = mongoose.model('MealMenu', mealMenuSchema);

module.exports = MealMenu;
