const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/paymentController');

// Create a new payment record
router.post('/', PaymentController.createPayment);

// Get all payment records
router.get('/', PaymentController.getAllPayments);

// Get payment records by user ID
router.get('/user/:userId', PaymentController.getPaymentsByUserId);

// Update a payment record by ID
router.put('/:id', PaymentController.updatePayment);

// Delete a payment record by ID
router.delete('/:id', PaymentController.deletePayment);

module.exports = router;
