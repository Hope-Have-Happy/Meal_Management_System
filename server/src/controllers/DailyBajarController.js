const express = require("express");
const DailyBajar = require("../models/DailyBajar"); // Import the DailyBajar model
const router = express.Router();

// Create a new daily bajar entry (Admin functionality)

const createDailyBajar = async (req, res) => {
  try {
    // Extract daily bajar data from the request body
    const { title, qty, unit, price, total, bajar_date, creator } = req.body;

    // Create a new DailyBajar document with the provided data and insert it into the database
    await DailyBajar.create({
      title,
      qty,
      unit,
      price,
      total,
      bajar_date,
      creator,
    });

    // Return a success response
    return res
      .status(201)
      .json({ message: "Daily bajar entry created successfully" });
  } catch (error) {
    // Handle any errors that occur during daily bajar entry creation
    console.error("Error creating daily bajar entry:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Read all daily bajar entries (Admin functionality)
const getAllDailyBajars = async (req, res) => {
  try {
    // Retrieve all daily bajar documents from the database
    const dailyBajarEntries = await DailyBajar.find();

    // Return the list of daily bajar entries in the response
    return res.status(200).json(dailyBajarEntries);
  } catch (error) {
    // Handle any errors that occur during daily bajar entry retrieval
    console.error("Error retrieving daily bajar entries:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Read daily bajar entry by ID (Admin functionality)
const getDailyBajarById = async (req, res) => {
  try {
    const dailyBajarId = req.params.id;

    // Find the daily bajar entry document by ID
    const dailyBajarEntry = await DailyBajar.findById(dailyBajarId);

    if (!dailyBajarEntry) {
      return res.status(404).json({ error: "Daily bajar entry not found" });
    }

    // Return the daily bajar entry details in the response
    return res.status(200).json(dailyBajarEntry);
  } catch (error) {
    // Handle any errors that occur during daily bajar entry retrieval
    console.error("Error retrieving daily bajar entry:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update daily bajar entry by ID (Admin functionality)
const updateDailyBajar = async (req, res) => {
  try {
    const dailyBajarId = req.params.id;

    // Find the daily bajar entry document by ID and update it
    const updatedDailyBajarEntry = await DailyBajar.findByIdAndUpdate(
      dailyBajarId,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedDailyBajarEntry) {
      return res.status(404).json({ error: "Daily bajar entry not found" });
    }

    // Return a success response with the updated daily bajar entry data
    return res.status(200).json({
      message: "Daily bajar entry updated successfully",
      dailyBajarEntry: updatedDailyBajarEntry,
    });
  } catch (error) {
    // Handle any errors that occur during daily bajar entry update
    console.error("Error updating daily bajar entry:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete daily bajar entry by ID (Admin functionality)
const deleteDailyBajar = async (req, res) => {
  try {
    const dailyBajarId = req.params.id;

    // Find and remove the daily bajar entry document by ID
    const deletedDailyBajarEntry = await DailyBajar.findByIdAndRemove(
      dailyBajarId
    );

    if (!deletedDailyBajarEntry) {
      return res.status(404).json({ error: "Daily bajar entry not found" });
    }

    // Return a success response with the deleted daily bajar entry data
    return res.status(200).json({
      message: "Daily bajar entry deleted successfully",
      dailyBajarEntry: deletedDailyBajarEntry,
    });
  } catch (error) {
    // Handle any errors that occur during daily bajar entry deletion
    console.error("Error deleting daily bajar entry:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createDailyBajar,
  getAllDailyBajars,
  getDailyBajarById,
  updateDailyBajar,
  deleteDailyBajar,
};
