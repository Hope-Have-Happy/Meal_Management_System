const path = require("path");
const fs = require("fs");
const User = require("../models/user"); // Import the User model
const { hashPassword } = require("../utils/passwordUtils");
const {
  getAllUsersInfo,
  getUserInfo,
  createSingleUser,
  updateSingleUser,
  updateOwnData,
  deleteSingleUser,
} = require("../services/userServices");

const UserController = {
  // Get all users (accessible by admin)
  getAllUsers: async (req, res) => {
    let result = await getAllUsersInfo(req);
    return res.status(200).json(result);
  },

  // Get a user by ID (accessible admin)
  getUserById: async (req, res) => {
    let result = await getUserInfo(req);
    return res.status(200).json(result);
  },

  // Create a new user (accessible by admin)
  createUser: async (req, res) => {
    let result = await createSingleUser(req);
    return res.status(200).json(result);
  },

  // Update a user (accessible by admin)
  updateUser: async (req, res) => {
    let result = await updateSingleUser(req);
    return res.status(200).json(result);
  },

  // Update a user (accessible by user)
  updateUserOwnInfo: async (req, res) => {
    let result = await updateOwnData(req);
    return res.status(200).json(result);
  },

  // Refresh token
  refreshToken: async (req, res) => {
    return res.status(200).json({ result: "Refresh Token Route" });
  },

  // Reset Password if user forget his password
  forgetPassword: async (req, res) => {
    // mobile number deiye check hobe user exist kore kina then password update hobe

    res.status(200).json({ message: "forget password" });
  },

  // Delete a user
  deleteUser: async (req, res) => {
    let result = await deleteSingleUser(req);
    return res.status(200).json(result);
  },
};

module.exports = UserController;
