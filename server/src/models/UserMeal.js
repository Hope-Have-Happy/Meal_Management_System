const mongoose = require('mongoose');

const userMealSchema = new mongoose.Schema({
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
  qty: {
    type: Number,
    unsigned: true,
    default: 1,
  },
  date: Date,
  status: {
    type: Number,
    default: 1,
  },
  creator: {
    type: mongoose.Schema.Types.BigInt,
    default: null,
  },
}, { timestamps: true });

const UserMeal = mongoose.model('UserMeal', userMealSchema);

module.exports = UserMeal;
