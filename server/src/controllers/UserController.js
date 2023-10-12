const path = require("path");
const fs = require("fs");
const User = require("../models/user"); // Import the User model
const { hashPassword } = require("../utils/passwordUtils");

const UserController = {
  // Get all users (accessible by admin)
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

  // Create a new user (accessible by admin) (Working on it......!)
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

  // Update a user (accessible by admin)
  updateUser: async (req, res) => {
    try {
      const id = req.body.userId;
      const updatedUser = req.body;
      delete updatedUser?.userId;

      // password hash kore update kora lagbe

      const user = await User.findByIdAndUpdate(id, updatedUser, {
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

  // Update a user (accessible by user)
  updateUserOwnInfo: async (req, res) => {
    try {
      const id = req.params.id;
      const updatedUser = req.body;

      // password hash kore update kora lagbe

      const user = await User.findByIdAndUpdate(id, updatedUser, {
        new: true,
      });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(200).json(updatedUser);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while updating the user" });
    }
  },

  forgetPassword: async (req, res) => {
    // mobile number deiye check hobe user exist kore kina then password update hobe

    res.status(200).json({ message: "forget password" });
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
