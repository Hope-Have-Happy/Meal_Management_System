const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
const { validationResult } = require("express-validator");
const {
  userValidationRules,
  validateUserData,
} = require("../middlewares/validationMiddleware");
const { isLogedIn, isAdmin } = require("../middlewares/authMiddleware");

// Get all users (Admin) ✔
router.get("/users", isLogedIn, isAdmin, UserController.getAllUsers);

// Get a user by ID (Admin and User)(Need to separate for admin and also for normal user)
router.get("/users/:id", isLogedIn, UserController.getUserById);

// Get a user by ID (Admin)

// Create a new user (Admin) (Half done)
router.post(
  "/users",
  isLogedIn,
  isAdmin,
  userValidationRules,
  validateUserData,
  UserController.createUser
);

// refresh token
// router.get("/users/refresh-token", refreshToken);

// Update a user (Admin and User)
router.put("/users/:id", isLogedIn, UserController.updateUser);

// Delete a user (Admin)
router.delete("/users/:id", UserController.deleteUser);

module.exports = router;
