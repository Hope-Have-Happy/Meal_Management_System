const mongoose = require("mongoose");

const dailyBajarsSchema = new mongoose.Schema(
  {
    title: { type: String },
    qty: { type: Number },
    unit: { type: String },
    price: { type: Number },
    total: { type: Number },
    bajar_date: { type: Date },
    status: { type: Number, default: 1 },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const DailyBajars = mongoose.model("DailyBajars", dailyBajarsSchema);

module.exports = DailyBajars;
