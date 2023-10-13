const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    full_name: { type: String, required: true },
    user_role: {
      type: String,
      enum: ["Admin", "User"],
      default: "User",
    },
    photo: { type: String, default: "" },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (v) =>
          /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v),
        message: "This in an invalid email.",
      },
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: (v) => v.length >= 8, // Password should be at least 8 characters long
        message: "Password must be at least 8 characters long.",
      },
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (v) => /^\d{11}$/.test(v),
        message: "Mobile number must be 11 digits long.",
      },
    },
    department: {
      type: String,
      enum: ["IT", "IELTS", "SPOKEN", "EMPLOYEE"],
      required: true,
    },
    address: { type: String, required: true },
    status: { type: Number, default: 1 },
  },
  { timestamps: true }
);

const User = mongoose.model("User", usersSchema);

module.exports = User;
