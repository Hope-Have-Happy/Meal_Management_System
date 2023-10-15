// Import Express and create an Express Router for defining routes
const express = require("express");
const router = express.Router();

// Import the User Controller for user-related logic
const UserController = require("../controllers/UserController");

// Import validation-related functions and middleware
const {
  userValidationRules,
  userUpdateValidationRules,
  validateDataResult,
} = require("../middlewares/validationMiddleware");

// Import middleware for user authentication checks
const { isLoggedIn, isAdmin } = require("../middlewares/authMiddleware");

// Get all users (Admin) ✔
router.get("/users", isLoggedIn, isAdmin, UserController.getAllUsers);

// Get a user by ID (Admin) ✔
router.get("/users/:userId", isLoggedIn, isAdmin, UserController.getUserById);

// Create a new user (Admin) ✔
router.post(
  "/users",
  isLoggedIn,
  isAdmin,
  userValidationRules,
  validateDataResult,
  UserController.createUser
);

// Update a user (Admin) ✔
router.put(
  "/users/:userId",
  isLoggedIn,
  isAdmin,
  userUpdateValidationRules,
  validateDataResult,
  UserController.updateUser
);

// Update user's own info (User) ✔
router.put("/user-info/:userId", isLoggedIn, UserController.updateUserOwnInfo);

// Add routes for sending OTP and resetting password
router.post("/send-otp", UserController.sendOTPToUser);
router.post("/reset-password", UserController.resetPasswordWithOTP);

// Delete a user (Admin) ✔
router.delete("/users/:userId", isLoggedIn, isAdmin, UserController.deleteUser);

module.exports = router;
