const mongoose = require("mongoose");

const userPaymentsSchema = new mongoose.Schema(
  {
    users_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    month: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          // Define a regular expression to match the expected format
          const regex = new RegExp(
            /^(January|February|March|April|May|June|July|August|September|October|November|December)-\d{4}$/
          );
          return regex.test(value);
        },
        error:
          "The 'month' field must be in the format 'Month-Year', e.g., 'January-2023'.",
      },
    },
    payment_date: {
      type: Date,
      required: true,
    },
    amount: {
      type: Number,
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

const UserPayments = mongoose.model("UserPayments", userPaymentsSchema);

module.exports = UserPayments;
