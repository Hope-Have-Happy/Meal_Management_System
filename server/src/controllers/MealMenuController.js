const express = require("express");
const MealMenu = require("../models/MealMenu"); // Import the MealMenu model
const router = express.Router();

// Create a new meal menu (Admin functionality)
const createMealMenu = async (req, res) => {
  try {
    // Extract meal menu data from the request body
    const { meal_date, description, receipy, creator } = req.body;

    // Create a new MealMenu document with the provided data and insert it into the database
    await MealMenu.create({
      meal_date,
      description,
      receipy,
      creator,
    });

    // Return a success response
    return res.status(201).json({ message: "Meal menu created successfully" });
  } catch (error) {
    // Handle any errors that occur during meal menu creation
    console.error("Error creating meal menu:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Read all meal menus (Admin functionality)
const getAllMealMenus = async (req, res) => {
  try {
    // Retrieve all meal menu documents from the database
    const mealMenus = await MealMenu.find();

    // Return the list of meal menus in the response
    return res.status(200).json(mealMenus);
  } catch (error) {
    // Handle any errors that occur during meal menu retrieval
    console.error("Error retrieving meal menus:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Read meal menu by ID (Admin functionality)
const getMealMenuById = async (req, res) => {
  try {
    const mealMenuId = req.params.id;

    // Find the meal menu document by ID
    const mealMenu = await MealMenu.findById(mealMenuId);

    if (!mealMenu) {
      return res.status(404).json({ error: "Meal menu not found" });
    }

    // Return the meal menu details in the response
    return res.status(200).json(mealMenu);
  } catch (error) {
    // Handle any errors that occur during meal menu retrieval
    console.error("Error retrieving meal menu:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update meal menu by ID (Admin functionality)
const updateMealMenu = async (req, res) => {
  try {
    const mealMenuId = req.params.id;

    // Find the meal menu document by ID and update it
    const updatedMealMenu = await MealMenu.findByIdAndUpdate(
      mealMenuId,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedMealMenu) {
      return res.status(404).json({ error: "Meal menu not found" });
    }

    // Return a success response with the updated meal menu data
    return res.status(200).json({
      message: "Meal menu updated successfully",
      mealMenu: updatedMealMenu,
    });
  } catch (error) {
    // Handle any errors that occur during meal menu update
    console.error("Error updating meal menu:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete meal menu by ID (Admin functionality)
const deleteMealMenu = async (req, res) => {
  try {
    const mealMenuId = req.params.id;

    // Find and remove the meal menu document by ID
    const deletedMealMenu = await MealMenu.findByIdAndRemove(mealMenuId);

    if (!deletedMealMenu) {
      return res.status(404).json({ error: "Meal menu not found" });
    }

    // Return a success response with the deleted meal menu data
    return res.status(200).json({
      message: "Meal menu deleted successfully",
      mealMenu: deletedMealMenu,
    });
  } catch (error) {
    // Handle any errors that occur during meal menu deletion
    console.error("Error deleting meal menu:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createMealMenu,
  getAllMealMenus,
  getMealMenuById,
  updateMealMenu,
  deleteMealMenu,
};
