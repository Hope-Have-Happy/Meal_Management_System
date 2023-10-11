const express = require("express");
const router = express.Router();

const PaymentController = require("../controllers/PaymentController");

// Payment History
// Make a payment
router.post("/payments", PaymentController.makePayment);

// Get all payments
router.get("/payments", PaymentController.getAllPayments);

// Get a payment by ID
router.get("/payments/:id", PaymentController.getPaymentById);

// Update a payment
router.put("/payments/:id", PaymentController.updatePayment);

// Delete a payment
router.delete("/payments/:id", PaymentController.deletePayment);

module.exports = router;
