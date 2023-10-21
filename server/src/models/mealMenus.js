const mongoose = require("mongoose");

const mealMenusSchema = new mongoose.Schema(
  {
    meal_date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    recipe: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      default: 1,
      required: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const MealMenus = mongoose.model("MealMenus", mealMenusSchema);

module.exports = MealMenus;
