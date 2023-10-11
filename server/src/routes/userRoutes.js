const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

// Get all users (Admin and User)
router.get("/users", UserController.getAllUsers);

// Get a user by ID (Admin and User)
router.get("/users/:id", UserController.getUserById);

// Create a new user (Admin)
router.post("/users", UserController.createUser);

// Update a user (Admin and User)
router.put("/users/:id", UserController.updateUser);

// Delete a user (Admin)
router.delete("/users/:id", UserController.deleteUser);

module.exports = router;
