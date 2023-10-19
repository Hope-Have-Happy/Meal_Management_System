const mongoose = require("mongoose");

const dailyBajarsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    bajar_date: {
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

const DailyBajars = mongoose.model("DailyBajars", dailyBajarsSchema);

module.exports = DailyBajars;
