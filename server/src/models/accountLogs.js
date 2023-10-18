const mongoose = require("mongoose");

const accountLogsSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    is_expense: {
      type: Number,
      required: true,
    },
    is_income: {
      type: Number,
      required: true,
    },
    income_date: {
      type: Date,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
    },
    status: {
      type: Number,
      default: 1,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const AccountLogs = mongoose.model("AccountLogs", accountLogsSchema);

module.exports = AccountLogs;
