const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
const { validationResult } = require("express-validator");
const {
  userValidationRules,
  validateUserData,
  userUpdateValidationRules,
  validateUpdateData,
} = require("../middlewares/validationMiddleware");
const { isLoggedIn, isAdmin } = require("../middlewares/authMiddleware");

// Get all users (Admin) ✔
router.get("/users", isLoggedIn, isAdmin, UserController.getAllUsers);

// Get a user by ID (Admin) ✔
router.get("/users/:id", isLoggedIn, isAdmin, UserController.getUserById);

// Create a new user (Admin) ✔
router.post(
  "/users",
  isLoggedIn,
  isAdmin,
  userValidationRules,
  validateUserData,
  UserController.createUser
);

// refresh token
// router.get("/users/refresh-token", refreshToken);

// Update a user (Admin) ✔
router.put(
  "/users/:userId",
  isLoggedIn,
  isAdmin,
  userUpdateValidationRules,
  validateUpdateData,
  UserController.updateUser
);

// Update user's own info (User) (Half Done)
router.put("/user-info/:id", isLoggedIn, UserController.updateUserOwnInfo);

// Forget Password (For all)
router.patch("/users/forget-password", UserController.forgetPassword);

// Delete a user (Admin) ✔
router.delete("/users", isLoggedIn, isAdmin, UserController.deleteUser);

module.exports = router;
