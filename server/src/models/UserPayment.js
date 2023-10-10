const mongoose = require('mongoose');

const userPaymentSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.BigInt,
    required: true,
    unique: true,
  },
  users_id: {
    type: mongoose.Schema.Types.BigInt,
    ref: 'User',
    required: true,
  },
  month: Date,
  payment_date: Date,
  amount: Number,
  status: {
    type: Number,
    default: 1,
  },
  creator: {
    type: mongoose.Schema.Types.BigInt,
    default: null,
  },
}, { timestamps: true });

const UserPayment = mongoose.model('UserPayment', userPaymentSchema);

module.exports = UserPayment;
