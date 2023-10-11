const mongoose = require("mongoose");

const accountLogSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    is_expense: {
      type: Boolean,
      required: true,
    },
    is_income: {
      type: Boolean,
      required: true,
    },
    income_date: {
      type: Date,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.BigInt,
      required: true,
    },
    status: {
      type: Number,
      default: 1,
    },
    creator: {
      type: mongoose.Schema.Types.BigInt,
      default: null,
    },
  },
  { timestamps: true }
);

const AccountLog = mongoose.model("AccountLog", accountLogSchema);

module.exports = AccountLog;
