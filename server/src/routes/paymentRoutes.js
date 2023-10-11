const express = require("express");
const router = express.Router();

const PaymentController = require("../controllers/PaymentController");

// Make a payment (Admin and User)
router.post("/payments", PaymentController.makePayment);

// Get payment history for a specific user (User)
router.get("/payments/history", PaymentController.getPaymentHistory);

// Get all payments (Admin)
router.get("/payments/all", PaymentController.getAllPayments);

// Get a payment by ID (Admin and User)
router.get("/payments/:id", PaymentController.getPaymentById);

// Update a payment (Admin and User)
router.put("/payments/:id", PaymentController.updatePayment);

// Delete a payment (Admin)
router.delete("/payments/:id", PaymentController.deletePayment);

module.exports = router;
