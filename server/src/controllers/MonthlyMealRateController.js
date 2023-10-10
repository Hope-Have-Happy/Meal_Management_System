const express = require("express");
const MonthlyMealRate = require("../models/MonthlyMealRate"); // Import the MonthlyMealRate model
const router = express.Router();

// Create a new monthly meal rate (Admin functionality)
const createMonthlyMealRate = async (req, res) => {
  try {
    // Extract monthly meal rate data from the request body
    const {
      month,
      meal_rate,
      is_visible,
      month_start_date,
      month_end_date,
      creator,
    } = req.body;

    // Create a new MonthlyMealRate document with the provided data and insert it into the database
    await MonthlyMealRate.create({
      month,
      meal_rate,
      is_visible,
      month_start_date,
      month_end_date,
      creator,
    });

    // Return a success response
    return res
      .status(201)
      .json({ message: "Monthly meal rate created successfully" });
  } catch (error) {
    // Handle any errors that occur during monthly meal rate creation
    console.error("Error creating monthly meal rate:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Read all monthly meal rates (Admin functionality)
const getAllMonthlyMealRates = async (req, res) => {
  try {
    // Retrieve all monthly meal rate documents from the database
    const monthlyMealRates = await MonthlyMealRate.find();

    // Return the list of monthly meal rates in the response
    return res.status(200).json(monthlyMealRates);
  } catch (error) {
    // Handle any errors that occur during monthly meal rate retrieval
    console.error("Error retrieving monthly meal rates:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Read monthly meal rate by ID (Admin functionality)
const getMonthlyMealRateById = async (req, res) => {
  try {
    const monthlyMealRateId = req.params.id;

    // Find the monthly meal rate document by ID
    const monthlyMealRate = await MonthlyMealRate.findById(monthlyMealRateId);

    if (!monthlyMealRate) {
      return res.status(404).json({ error: "Monthly meal rate not found" });
    }

    // Return the monthly meal rate details in the response
    return res.status(200).json(monthlyMealRate);
  } catch (error) {
    // Handle any errors that occur during monthly meal rate retrieval
    console.error("Error retrieving monthly meal rate:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update monthly meal rate by ID (Admin functionality)
const updateMonthlyMealRate = async (req, res) => {
  try {
    const monthlyMealRateId = req.params.id;

    // Find the monthly meal rate document by ID and update it
    const updatedMonthlyMealRate = await MonthlyMealRate.findByIdAndUpdate(
      monthlyMealRateId,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedMonthlyMealRate) {
      return res.status(404).json({ error: "Monthly meal rate not found" });
    }

    // Return a success response with the updated monthly meal rate data
    return res.status(200).json({
      message: "Monthly meal rate updated successfully",
      monthlyMealRate: updatedMonthlyMealRate,
    });
  } catch (error) {
    // Handle any errors that occur during monthly meal rate update
    console.error("Error updating monthly meal rate:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete monthly meal rate by ID (Admin functionality)
const deleteMonthlyMealRate = async (req, res) => {
  try {
    const monthlyMealRateId = req.params.id;

    // Find and remove the monthly meal rate document by ID
    const deletedMonthlyMealRate = await MonthlyMealRate.findByIdAndRemove(
      monthlyMealRateId
    );

    if (!deletedMonthlyMealRate) {
      return res.status(404).json({ error: "Monthly meal rate not found" });
    }

    // Return a success response with the deleted monthly meal rate data
    return res.status(200).json({
      message: "Monthly meal rate deleted successfully",
      monthlyMealRate: deletedMonthlyMealRate,
    });
  } catch (error) {
    // Handle any errors that occur during monthly meal rate deletion
    console.error("Error deleting monthly meal rate:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createMonthlyMealRate,
  getAllMonthlyMealRates,
  getMonthlyMealRateById,
  updateMonthlyMealRate,
  deleteMonthlyMealRate,
};
