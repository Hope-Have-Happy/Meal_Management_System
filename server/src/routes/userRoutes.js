// Import Express for creating a web application and create an Express Router for defining routes
const express = require("express");
const router = express.Router();

// Import the User Controller for user-related logic
const UserController = require("../controllers/UserController");

// Import `validationResult` for checking validation results
const { validationResult } = require("express-validator");

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

// refresh token (Work left to do)
router.get("/refresh-token", UserController.refreshToken);

// Forget Password (Work left to do)
router.patch("/users/forget-password", UserController.forgetPassword);

// Delete a user (Admin) ✔
router.delete("/users/:userId", isLoggedIn, isAdmin, UserController.deleteUser);

module.exports = router;
