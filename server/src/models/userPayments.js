const mongoose = require("mongoose");

const userPaymentsSchema = new mongoose.Schema(
  {
    users_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    month: {
      type: Date,
    },
    payment_date: {
      type: Date,
    },
    amount: {
      type: Number,
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

const UserPayments = mongoose.model("UserPayments", userPaymentsSchema);

module.exports = UserPayments;
