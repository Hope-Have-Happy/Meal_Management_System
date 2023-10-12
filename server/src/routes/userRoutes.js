const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
const { validationResult } = require("express-validator");
const {
  userValidationRules,
  validateUserData,
} = require("../middlewares/validationMiddleware");

// Get all users (Admin)
router.get("/users", UserController.getAllUsers);

// Get a user by ID (Admin and User)
router.get("/users/:id", UserController.getUserById);

// Create a new user (Admin) (Woking on it......!)
router.post(
  "/users",
  userValidationRules,
  validateUserData,
  UserController.createUser
);

// Update a user (Admin and User)
router.put("/users/:id", UserController.updateUser);

// Delete a user (Admin)
router.delete("/users/:id", UserController.deleteUser);

module.exports = router;
