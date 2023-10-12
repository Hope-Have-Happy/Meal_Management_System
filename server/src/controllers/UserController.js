const path = require("path");
const fs = require("fs");
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
      // Checking if the email or mobile number already exists in the database
      const { email, mobile } = req.body;

      if (await User.exists({ $or: [{ email }, { mobile }] })) {
        return res
          .status(400)
          .json({ error: "Email or mobile number is already in use" });
      }

      // Hash the password before storing it in the database
      const hashedPassword = await hashPassword(req.body.password);
      req.body.password = hashedPassword;

      // Create a new user in the database
      const newUser = await User.create(req.body);

      // Specify the absolute path for the "public" folder
      const publicPath = path.join(__dirname, "../../public");

      // Create a directory with the user's ObjectId for storing uploads
      const userId = newUser._id;
      const uploadDir = path.join(publicPath, "uploads", userId.toString());

      if (req.files && req.files.photo) {
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }

        // Handle file upload (if an image is uploaded)

        const photo = req.files.photo;

        // Move the uploaded image to the user's folder
        const photoPath = path.join(uploadDir, "profile.jpg");

        photo.mv(photoPath, (err) => {
          if (err) {
            console.error("Error uploading profile picture: ", err);
          }
        });

        // newUser.photo = `/uploads/${userId.toString()}/profile.jpg`;
        newUser.photo = "profile.jpg";
        await newUser.save();
      }

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
      const id = req.body.userId;

      const user = await User.findByIdAndRemove(id);

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
