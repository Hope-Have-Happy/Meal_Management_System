const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

// Create a new user
router.post("/user", UserController.createUser);

// Get all users
router.get("/users", UserController.getAllUsers);

// Get a single user by ID
router.get("/user/:id", UserController.getUserById);

// Update a user by ID
router.put("/user/:id", UserController.updateUser);

// Delete a user by ID
router.delete("/user/:id", UserController.deleteUser);

module.exports = router;
