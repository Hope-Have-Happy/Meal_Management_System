// User CRUD Related Services
const {
  getAllUsersInfo,
  getUserInfo,
  createSingleUser,
  updateSingleUser,
  updateOwnData,
  deleteSingleUser,
  recoverPassword,
  updateUserInfo,
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
    let result = await updateUserInfo(req);
    return res.status(200).json(result);
  },

  // Update a user (accessible by user)
  updateUserOwnInfo: async (req, res) => {
    let result = await updateUserInfo(req);
    return res.status(200).json(result);
  },

  // Send OTP To user
  sendOTPToUser: async (req, res) => {
    let result = await SendOTP(req);
    return res.status(200).json(result);
  },

  // reset password with otp
  resetPasswordWithOTP: async (req, res) => {
    let result = await resetPassword(req);
    return res.status(200).json(result);
  },

  // Delete a user
  deleteUser: async (req, res) => {
    let result = await deleteSingleUser(req);
    return res.status(200).json(result);
  },
};

module.exports = UserController;
