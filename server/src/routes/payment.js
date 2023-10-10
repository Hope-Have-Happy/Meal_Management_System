// Import necessary controllers
const {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
} = require("../controllers/PaymentController");

const express = require("express");
const router = express.Router();

// Payment Routes
router.post("/payments", createPayment);
router.get("/payments", getAllPayments);
router.get("/payments/:id", getPaymentById);
router.put("/payments/:id", updatePayment);
router.delete("/payments/:id", deletePayment);

module.exports = router;
