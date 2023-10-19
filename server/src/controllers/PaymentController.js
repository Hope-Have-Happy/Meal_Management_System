const UserPayments = require("../models/userPayments");
const User = require("../models/user");
const {
  make_a_user_payment,
  payment_history,
  get_all_payment_list,
  get_payment_by_id,
  update_payment_data,
  delete_payment_data,
} = require("../services/paymentServices");

const PaymentController = {
  // Make a payment (Admin)
  makePayment: async (req, res) => {
    let result = await make_a_user_payment(req);
    return res.status(200).json(result);
  },

  // Get payment history for a logged-in user (User)
  getPaymentHistory: async (req, res) => {
    let result = await payment_history(req);
    return res.status(200).json(result);
  },

  // Get all payments (Admin)
  getAllPayments: async (req, res) => {
    let result = await get_all_payment_list(req);
    return res.status(200).json(result);
  },

  // Get a payment by ID (Admin)
  getPaymentById: async (req, res) => {
    let result = await get_payment_by_id(req);
    return res.status(200).json(result);
  },

  // Update a payment (Admin)
  updatePayment: async (req, res) => {
    let result = await update_payment_data(req);
    return res.status(200).json(result);
  },

  // Delete a payment (Admin)
  deletePayment: async (req, res) => {
    let result = await delete_payment_data(req);
    return res.status(200).json(result);
  },
};

module.exports = PaymentController;
