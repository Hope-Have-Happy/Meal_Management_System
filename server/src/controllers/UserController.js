const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const User = require("../models/User");
const UserMeal = require("../models/UserMeal");
const Payment = require("../models/UserPayment");
const MealMenu = require("../models/MealMenu");
const MonthlyMealRate = require("../models/MonthlyMealRate");
const dashboardService = require("../services/dashboardService");

const router = express.Router();

// Create a new user (Admin functionality)
const createUser = async (req, res) => {
  try {
    // Extract user data from the request body
    const {
      full_name,
      user_role,
      photo,
      email,
      password,
      mobile,
      department,
      address,
    } = req.body;

    // Create a new User document with the provided data and insert it into the database
    await User.create({
      full_name,
      user_role,
      photo,
      email,
      password,
      mobile,
      department,
      address,
    });

    // Return a success response
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    // Handle any errors that occur during user creation
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Read all users (Admin functionality)
const getAllUsers = async (req, res) => {
  try {
    // Retrieve all user documents from the database
    const users = await User.find();

    // Return the list of users in the response
    return res.status(200).json(users);
  } catch (error) {
    // Handle any errors that occur during user retrieval
    console.error("Error retrieving users:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Read user by ID (Admin functionality)
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    // Find the user document by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Return the user details in the response
    return res.status(200).json(user);
  } catch (error) {
    // Handle any errors that occur during user retrieval
    console.error("Error retrieving user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update user by ID (Admin functionality)
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Find the user document by ID
    const user = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Return a success response with the updated user data
    return res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    // Handle any errors that occur during user update
    console.error("Error updating user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete user by ID (Admin functionality)
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Find and remove the user document by ID
    const deletedUser = await User.findByIdAndRemove(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Return a success response with the deleted user data
    return res.status(200).json({
      message: "User deleted successfully",
      user: deletedUser,
    });
  } catch (error) {
    // Handle any errors that occur during user deletion
    console.error("Error deleting user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// User login route (User & Admin functionality)
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Check if the provided password matches the stored password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate and send an authentication token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    return res.status(200).json({ token });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// User dashboard route (User  functionality)
const getDashboard = async (req, res) => {
  try {
    // Fetch Total Cash and Total Due using dashboardService functions
    const totalCash = await dashboardService.calculateTotalCash();
    const dueCash = await dashboardService.calculateDueCash();

    // Fetch Total Mill This Month (you'll need to implement this logic)
    const totalMillThisMonth = await calculateTotalMillThisMonth();

    // Fetch Last Month's Match Rate from MonthlyMealRate model (you'll need to implement this logic)
    const lastMonthsMatchRate = await fetchLastMonthsMatchRate();

    // Return the dashboard information in the response
    return res.status(200).json({
      totalCash,
      dueCash,
      totalMillThisMonth,
      lastMonthsMatchRate,
    });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Meal booking routes (User  functionality)
const bookMeal = async (req, res) => {
  try {
    // Check if it's past 6 pm for today's booking
    const now = new Date();
    const today6pm = new Date();
    today6pm.setHours(18, 0, 0, 0);

    if (now >= today6pm) {
      // Return a message indicating that booking time has passed
      return res
        .status(400)
        .json({ message: "Booking time has passed for today." });
    }

    // Extract data from the request body
    const { userId, date, quantity } = req.body;

    // Create a new UserMeal document for the booking
    const mealBooking = new UserMeal({
      users_id: userId,
      date,
      qty: quantity,
    });

    // Save the meal booking to the database (you mentioned not using save, but this is a common approach)
    const savedBooking = await mealBooking.save();

    // Return a success response with the saved booking data
    return res
      .status(200)
      .json({ message: "Meal booking successful", booking: savedBooking });
  } catch (error) {
    console.error("Error booking a meal:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Route to fetch and return a list of user's meal bookings sorted by date (Use functionality)(confusion লাগবে কী লাগবে না এটা নিয়ে বা লাগলেও আপডেট করতে হবে কী না............!)
const getMealBookings = async (req, res) => {
  try {
    // Extract the user ID from the request (assuming it's stored in the request)
    const userId = req.user.id; // Replace with the actual way you retrieve the user ID

    // Query the UserMeal model to retrieve user-specific bookings sorted by date
    const userMealBookings = await UserMeal.find({ users_id: userId }).sort({
      date: 1,
    });

    // Return the sorted list of user's meal bookings in the response
    return res.status(200).json({ userMealBookings });
  } catch (error) {
    console.error("Error fetching meal bookings:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Route to delete a meal booking by booking ID
const deleteMealBooking = async (req, res) => {
  try {
    // Extract the user ID from the request (assuming it's stored in the request)
    const userId = req.user.id; // Replace with the actual way you retrieve the user ID

    // Extract the booking ID from the request parameters
    const bookingId = req.params.bookingId;

    // Check if it's past 6 pm for today's booking
    const now = new Date();
    const today6pm = new Date();
    today6pm.setHours(18, 0, 0, 0);

    if (now >= today6pm) {
      // Return a message indicating that the booking cannot be deleted after 6 pm
      return res
        .status(400)
        .json({ message: "Booking cannot be deleted after 6 pm." });
    }

    // Delete the meal booking for the user and booking ID
    const deletedBooking = await UserMeal.findOneAndDelete({
      _id: bookingId,
      users_id: userId,
    });

    if (!deletedBooking) {
      // Handle the case where no booking with the provided ID was found for the user
      return res.status(404).json({ message: "Booking not found." });
    }

    // Return a success response indicating the booking has been deleted
    return res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error("Error deleting a meal booking:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Payment history route (User  functionality)(confusion লাগবে কী লাগবে না এটা নিয়ে বা লাগলেও আপডেট করতে হবে কী না............!)
const getPaymentHistory = async (req, res) => {
  try {
    // Extract the user ID from the request (assuming it's stored in the request)
    const userId = req.user.id; // Replace with the actual way you retrieve the user ID

    // Query the UserPayment model to retrieve user-specific payment history
    const paymentHistory = await UserPayment.find({ users_id: userId });

    // Return the user's payment history in the response
    return res.status(200).json({ paymentHistory });
  } catch (error) {
    console.error("Error fetching payment history:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// View match list route (User  functionality)(confusion লাগবে কী লাগবে না এটা নিয়ে বা লাগলেও আপডেট করতে হবে কী না............!)
// I think the controller name need to be changed
const viewMatchList = async (req, res) => {
  try {
    // Implement logic to allow users to view the match list

    // Extract the user's requested month from the query parameters
    const requestedMonth = req.query.month; // Replace with the actual query parameter name

    // Query the MealMenu model to retrieve match information for the requested month
    const matchList = await MealMenu.find({
      meal_date: { $regex: new RegExp(requestedMonth, "i") },
    });

    // Query the MonthlyMealRate model to retrieve the meal rate for the requested month
    const mealRate = await MonthlyMealRate.findOne({
      month: { $regex: new RegExp(requestedMonth, "i") },
    });

    // Return the match list and meal rate in the response
    return res.status(200).json({ matchList, mealRate });
  } catch (error) {
    console.error("Error fetching match list:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// User settings routes (User  functionality)
const updateUserProfile = async (req, res) => {
  try {
    // Extract the user's ID from the request (assuming it's stored in the request)
    const userId = req.user.id; // Replace with the actual way you retrieve the user ID

    // Extract updated user information from the request body
    const { full_name, email, mobile, department, address } = req.body;

    // Validate and update the user's information in the User model
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { full_name, email, mobile, department, address },
      { new: true } // Return the updated user document
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Return a success response with the updated user information
    return res.status(200).json({ updatedUser });
  } catch (error) {
    console.error("Error updating user profile:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  login,
  getDashboard,
  bookMeal,
  getMealBookings,
  deleteMealBooking,
  getPaymentHistory,
  viewMatchList,
  updateUserProfile,
};
