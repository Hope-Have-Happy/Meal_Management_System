const express = require("express");
const router = express.Router();
const PaymentController = require("../controllers/paymentController");

// Create a new payment record
router.post("/payment", PaymentController.createPayment);

// Get all payment records
router.get("/payments", PaymentController.getAllPayments);

// Get payment records by user ID
router.get("/payment/user/:userId", PaymentController.getPaymentsByUserId);

// Update a payment record by ID
router.put("/payment/:id", PaymentController.updatePayment);

// Delete a payment record by ID
router.delete("/payment/:id", PaymentController.deletePayment);

module.exports = router;
