const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Create a new user
router.post('/', UserController.createUser);

// Get all users
router.get('/', UserController.getAllUsers);

// Get a single user by ID
router.get('/:id', UserController.getUserById);

// Update a user by ID
router.put('/:id', UserController.updateUser);

// Delete a user by ID
router.delete('/:id', UserController.deleteUser);

module.exports = router;
