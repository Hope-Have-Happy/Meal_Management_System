const express = require("express");
const UserMeal = require("../models/UserMeal"); // Import the UserMeal model
const router = express.Router();

// Create a new user meal entry (User functionality)
const createUserMeal = async (req, res) => {
  try {
    // Extract user meal data from the request body
    const { users_id, qty, date, creator } = req.body;

    // Create a new UserMeal document with the provided data and insert it into the database
    const userMealEntry = await UserMeal.create({
      users_id,
      qty,
      date,
      creator,
    });

    // Return a success response with the created user meal entry data
    return res
      .status(201)
      .json({ message: "User meal entry created successfully", userMealEntry });
  } catch (error) {
    // Handle any errors that occur during user meal entry creation
    console.error("Error creating user meal entry:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Read user meal entries by user ID (User functionality)
const getUserMealById = async (req, res) => {
  try {
    const userId = req.params.users_id;

    // Find all user meal entries for the specified user ID
    const userMealEntries = await UserMeal.find({ users_id: userId });

    // Return the list of user meal entries in the response
    return res.status(200).json(userMealEntries);
  } catch (error) {
    // Handle any errors that occur during user meal entry retrieval
    console.error("Error retrieving user meal entries:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update user meal entry by ID (User functionality)
const updateUserMeal = async (req, res) => {
  try {
    const userMealEntryId = req.params.id;

    // Find the user meal entry document by ID and update it
    const updatedUserMealEntry = await UserMeal.findByIdAndUpdate(
      userMealEntryId,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedUserMealEntry) {
      return res.status(404).json({ error: "User meal entry not found" });
    }

    // Return a success response with the updated user meal entry data
    return res.status(200).json({
      message: "User meal entry updated successfully",
      userMealEntry: updatedUserMealEntry,
    });
  } catch (error) {
    // Handle any errors that occur during user meal entry update
    console.error("Error updating user meal entry:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete user meal entry by ID (User functionality)
const deleteUserMeal = async (req, res) => {
  try {
    const userMealEntryId = req.params.id;

    // Find and remove the user meal entry document by ID
    const deletedUserMealEntry = await UserMeal.findByIdAndRemove(
      userMealEntryId
    );

    if (!deletedUserMealEntry) {
      return res.status(404).json({ error: "User meal entry not found" });
    }

    // Return a success response with the deleted user meal entry data
    return res.status(200).json({
      message: "User meal entry deleted successfully",
      userMealEntry: deletedUserMealEntry,
    });
  } catch (error) {
    // Handle any errors that occur during user meal entry deletion
    console.error("Error deleting user meal entry:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createUserMeal,
  getUserMealById,
  updateUserMeal,
  deleteUserMeal,
};
