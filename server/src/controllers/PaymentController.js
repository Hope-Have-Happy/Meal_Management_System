const express = require("express");
const UserPayment = require("../models/UserPayment"); // Import the UserPayment model
const router = express.Router();

// Create a new payment entry (User functionality)
const createPayment = async (req, res) => {
  try {
    // Extract payment data from the request body
    const { users_id, month, payment_date, amount } = req.body;

    // Create a new UserPayment document with the provided data and insert it into the database
    await UserPayment.create({
      users_id,
      month,
      payment_date,
      amount,
    });

    // Return a success response
    return res
      .status(201)
      .json({ message: "Payment entry created successfully" });
  } catch (error) {
    // Handle any errors that occur during payment entry creation
    console.error("Error creating payment entry:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Read all payments (Admin functionality)
const getAllPayments = async (req, res) => {
  try {
    // Retrieve all payment documents from the database
    const payments = await UserPayment.find();

    // Return the list of payments in the response
    return res.status(200).json(payments);
  } catch (error) {
    // Handle any errors that occur during payment retrieval
    console.error("Error retrieving payments:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Read payment by ID (Admin functionality)
const getPaymentById = async (req, res) => {
  try {
    const paymentId = req.params.id;

    // Find the payment document by ID
    const payment = await UserPayment.findById(paymentId);

    if (!payment) {
      return res.status(404).json({ error: "Payment entry not found" });
    }

    // Return the payment details in the response
    return res.status(200).json(payment);
  } catch (error) {
    // Handle any errors that occur during payment retrieval
    console.error("Error retrieving payment entry:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update payment by ID (User functionality)
const updatePayment = async (req, res) => {
  try {
    const paymentId = req.params.id;

    // Find the payment document by ID and update it
    const updatedPayment = await UserPayment.findByIdAndUpdate(
      paymentId,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedPayment) {
      return res.status(404).json({ error: "Payment entry not found" });
    }

    // Return a success response with the updated payment data
    return res.status(200).json({
      message: "Payment entry updated successfully",
      payment: updatedPayment,
    });
  } catch (error) {
    // Handle any errors that occur during payment update
    console.error("Error updating payment entry:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete payment by ID (User functionality)
const deletePayment = async (req, res) => {
  try {
    const paymentId = req.params.id;

    // Find and remove the payment document by ID
    const deletedPayment = await UserPayment.findByIdAndRemove(paymentId);

    if (!deletedPayment) {
      return res.status(404).json({ error: "Payment entry not found" });
    }

    // Return a success response with the deleted payment data
    return res.status(200).json({
      message: "Payment entry deleted successfully",
      payment: deletedPayment,
    });
  } catch (error) {
    // Handle any errors that occur during payment deletion
    console.error("Error deleting payment entry:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
};
