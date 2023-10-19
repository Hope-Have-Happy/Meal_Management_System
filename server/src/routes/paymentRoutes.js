// Import Express and create an Express Router for defining routes
const express = require("express");
const router = express.Router();

// Import the Payment Controller for payment-related logic
const PaymentController = require("../controllers/PaymentController");
const { isAdmin, isLoggedIn } = require("../middlewares/authMiddleware");

// Make a payment (Admin)
router.post("/payments", isLoggedIn, isAdmin, PaymentController.makePayment);

// Get payment history for a specific logged-in user (User)
router.get(
  "/payments/history",
  isLoggedIn,
  PaymentController.getPaymentHistory
);

// Get all payments (Admin)
router.get(
  "/payments/all",
  isLoggedIn,
  isAdmin,
  PaymentController.getAllPayments
);

// Get a payment by ID (Admin)
router.get(
  "/payments/:id",
  isLoggedIn,
  isAdmin,
  PaymentController.getPaymentById
);

// Update a payment (Admin)
router.put(
  "/payments/:id",
  isLoggedIn,
  isAdmin,
  PaymentController.updatePayment
);

// Delete a payment (Admin)
router.delete(
  "/payments/:id",
  isLoggedIn,
  isAdmin,
  PaymentController.deletePayment
);

module.exports = router;
