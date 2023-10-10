const express = require("express");
const Meal = require("../models/Meal"); // Import the Meal model
const router = express.Router();

// Create a new meal entry (User functionality)
const createMeal = async (req, res) => {
  try {
    // Extract meal data from the request body
    const { users_id, qty, date } = req.body;

    // Create a new Meal document with the provided data and insert it into the database
    await Meal.create({
      users_id,
      qty,
      date,
    });

    // Return a success response
    return res.status(201).json({ message: "Meal entry created successfully" });
  } catch (error) {
    // Handle any errors that occur during meal entry creation
    console.error("Error creating meal entry:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Read all meals (Admin functionality)
const getAllMeals = async (req, res) => {
  try {
    // Retrieve all meal documents from the database
    const meals = await Meal.find();

    // Return the list of meals in the response
    return res.status(200).json(meals);
  } catch (error) {
    // Handle any errors that occur during meal retrieval
    console.error("Error retrieving meals:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Read meal by ID (Admin functionality)
const getMealById = async (req, res) => {
  try {
    const mealId = req.params.id;

    // Find the meal document by ID
    const meal = await Meal.findById(mealId);

    if (!meal) {
      return res.status(404).json({ error: "Meal entry not found" });
    }

    // Return the meal details in the response
    return res.status(200).json(meal);
  } catch (error) {
    // Handle any errors that occur during meal retrieval
    console.error("Error retrieving meal entry:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update meal by ID (User functionality)
const updateMeal = async (req, res) => {
  try {
    const mealId = req.params.id;

    // Find the meal document by ID
    const meal = await Meal.findByIdAndUpdate(mealId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!meal) {
      return res.status(404).json({ error: "Meal entry not found" });
    }

    // Return a success response with the updated meal data
    return res
      .status(200)
      .json({ message: "Meal entry updated successfully", meal });
  } catch (error) {
    // Handle any errors that occur during meal update
    console.error("Error updating meal entry:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete meal by ID (User functionality)
const deleteMeal = async (req, res) => {
  try {
    const mealId = req.params.id;

    // Find and remove the meal document by ID
    const deletedMeal = await Meal.findByIdAndRemove(mealId);

    if (!deletedMeal) {
      return res.status(404).json({ error: "Meal entry not found" });
    }

    // Return a success response with the deleted meal data
    return res.status(200).json({
      message: "Meal entry deleted successfully",
      meal: deletedMeal,
    });
  } catch (error) {
    // Handle any errors that occur during meal deletion
    console.error("Error deleting meal entry:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createMeal,
  getAllMeals,
  getMealById,
  updateMeal,
  deleteMeal,
};
