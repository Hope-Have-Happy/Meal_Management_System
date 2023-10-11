const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

// User Management
// Get all users
router.get("/users", UserController.getAllUsers);

// Get a user by ID
router.get("/users/:id", UserController.getUserById);

// Create a new user
router.post("/users", UserController.createUser);

// Update a user
router.put("/users/:id", UserController.updateUser);

// Delete a user
router.delete("/users/:id", UserController.deleteUser);

module.exports = router;
