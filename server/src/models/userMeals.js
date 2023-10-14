const mongoose = require("mongoose");

const userMealsSchema = new mongoose.Schema(
  {
    users_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    qty: {
      type: Number,
      default: 1,
      required: true,
    },
    date: {
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

const UserMeals = mongoose.model("UserMeals", userMealsSchema);

module.exports = UserMeals;
