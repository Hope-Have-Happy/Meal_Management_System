const User = require("../models/user"); // Import the User model
const { hashPassword } = require("../utils/passwordUtils");

const UserController = {
  // Get all users (accessible by both admin and user)
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching users" });
    }
  },

  // Get a user by ID (accessible by both admin and user)
  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while fetching the user" });
    }
  },

  // Create a new user (accessible by admin) (Woking on it......!)
  createUser: async (req, res) => {
    try {
      // Check if there is an admin user in the database
      const adminUserExists = await User.exists({ user_role: "Admin" });

      if (!adminUserExists) {
        return res.status(403).json({
          error:
            "No admin user found. Cannot create users without an admin. So, Permission denied",
        });
      }

      // Hash the password before storing it in the database
      const hashedPassword = await hashPassword(req.body.password);
      req.body.password = hashedPassword;

      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while creating the user" });
    }
  },

  // Update a user (accessible by both admin and user)
  updateUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const updatedUser = req.body;

      // Check if the user updating the user is either an admin or the user being updated
      if (req.user.role !== "admin" && req.user.id !== userId) {
        return res.status(403).json({ error: "Permission denied" });
      }

      const user = await User.findByIdAndUpdate(userId, updatedUser, {
        new: true,
      });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      res.json(user);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while updating the user" });
    }
  },

  // Delete a user (accessible by admin)
  deleteUser: async (req, res) => {
    try {
      const userId = req.params.id;

      // Check if the user deleting the user is an admin
      if (req.user.role !== "admin") {
        return res.status(403).json({ error: "Permission denied" });
      }

      const user = await User.findByIdAndRemove(userId);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      res.json(user);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while deleting the user" });
    }
  },
};

module.exports = UserController;
