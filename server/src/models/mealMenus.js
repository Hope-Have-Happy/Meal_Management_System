const mongoose = require("mongoose");

const mealMenusSchema = new mongoose.Schema(
  {
    meal_date: { type: Date },
    description: { type: String },
    receipy: { type: String },
    status: { type: Number, default: 1 },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const MealMenus = mongoose.model("MealMenus", mealMenusSchema);

module.exports = MealMenus;
