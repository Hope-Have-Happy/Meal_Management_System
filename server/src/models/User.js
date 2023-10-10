const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.BigInt,
    required: true,
    unique: true,
  },
  full_name: {
    type: String,
    maxlength: 200,
    required: true,
  },
  user_role: String,
  photo: String,
  email: {
    type: String,
    maxlength: 100,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    maxlength: 20,
    required: true,
  },
  department: {
    type: String,
    enum: ['IT', 'IELTS', 'SPOKEN', 'EMPLOYEE'],
    required: true,
  },
  address: {
    type: String,
    maxlength: 45,
    required: true,
  },
  status: {
    type: Number,
    default: 1,
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
