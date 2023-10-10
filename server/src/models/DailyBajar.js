const mongoose = require('mongoose');

const dailyBajarSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.BigInt,
    required: true,
    unique: true,
  },
  title: String,
  qty: Number,
  unit: {
    type: String,
    maxlength: 10,
  },
  price: Number,
  total: Number,
  bajar_date: Date,
  status: {
    type: Number,
    default: 1,
  },
  creator: {
    type: mongoose.Schema.Types.BigInt,
    default: null,
  },
}, { timestamps: true });

const DailyBajar = mongoose.model('DailyBajar', dailyBajarSchema);

module.exports = DailyBajar;
