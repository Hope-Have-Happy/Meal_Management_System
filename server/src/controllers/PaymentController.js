const UserPayments = require("../models/userPayments");
const User = require("../models/user");

const PaymentController = {
  // Make a payment (Admin and User)
  makePayment: async (req, res) => {
    try {
      const paymentData = req.body;
      const payment = await UserPayments.create(paymentData);
      res.status(201).json(payment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Payment creation failed" });
    }
  },

  // Get payment history for a specific user (User)
  getPaymentHistory: async (req, res) => {
    try {
      const userId = req.user.id; // Assuming you have a user ID in the request object
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const payments = await UserPayments.find({ users_id: userId }); // Replace with the actual field that links payments to users
      res.status(200).json(payments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch payment history" });
    }
  },

  // Get all payments (Admin)
  getAllPayments: async (req, res) => {
    try {
      const payments = await UserPayments.find();
      res.status(200).json(payments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch payments" });
    }
  },

  // Get a payment by ID (Admin and User)
  getPaymentById: async (req, res) => {
    try {
      const paymentId = req.params.id;
      const payment = await UserPayments.findById(paymentId);
      if (!payment) {
        return res.status(404).json({ message: "Payment not found" });
      }
      res.status(200).json(payment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch payment" });
    }
  },

  // Update a payment (Admin and User)
  updatePayment: async (req, res) => {
    try {
      const paymentId = req.params.id;
      const updatedPaymentData = req.body;
      const payment = await UserPayments.findByIdAndUpdate(
        paymentId,
        updatedPaymentData,
        { new: true }
      );
      if (!payment) {
        return res.status(404).json({ message: "Payment not found" });
      }
      res.status(200).json(payment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to update payment" });
    }
  },

  // Delete a payment (Admin)
  deletePayment: async (req, res) => {
    try {
      const paymentId = req.params.id;
      const payment = await UserPayments.findByIdAndDelete(paymentId);
      if (!payment) {
        return res.status(404).json({ message: "Payment not found" });
      }
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to delete payment" });
    }
  },
};

module.exports = PaymentController;
