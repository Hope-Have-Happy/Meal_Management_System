const express = require("express");
const router = express.Router();

const PaymentController = require("../controllers/PaymentController");

// Make a payment (Admin and User)
router.post("/payments", PaymentController.makePayment);

// Get all payments (Admin and User)
router.get("/payments", PaymentController.getAllPayments);

// Get a payment by ID (Admin and User)
router.get("/payments/:id", PaymentController.getPaymentById);

// Update a payment (Admin and User)
router.put("/payments/:id", PaymentController.updatePayment);

// Delete a payment (Admin)
router.delete("/payments/:id", PaymentController.deletePayment);

module.exports = router;
