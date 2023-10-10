const Payment = require('../models/Payment');

// Create a new payment record
exports.createPayment = async (req, res) => {
  try {
    const { users_id, month, payment_date, amount } = req.body;

    // Create a new payment record
    const newPayment = new Payment({
      users_id,
      month,
      payment_date,
      amount,
    });

    // Save the new payment record to the database
    const savedPayment = await newPayment.save();

    res.status(201).json(savedPayment);
  } catch (error) {
    res.status(500).json({ error: 'Error creating payment record' });
  }
};

// Get all payment records
exports.getAllPayments = async (req, res) => {
  try {
    // Retrieve all payment records
    const payments = await Payment.find();

    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching payment records' });
  }
};

// Get payment records by user ID
exports.getPaymentsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    // Retrieve payment records for the specified user ID
    const payments = await Payment.find({ users_id: userId });

    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching payment records by user ID' });
  }
};

// Update a payment record by ID
exports.updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const { users_id, month, payment_date, amount } = req.body;

    // Find and update the payment record by ID
    const updatedPayment = await Payment.findByIdAndUpdate(
      id,
      {
        users_id,
        month,
        payment_date,
        amount,
      },
      { new: true } // Return the updated document
    );

    if (!updatedPayment) {
      return res.status(404).json({ error: 'Payment record not found' });
    }

    res.status(200).json(updatedPayment);
  } catch (error) {
    res.status(500).json({ error: 'Error updating payment record' });
  }
};

// Delete a payment record by ID
exports.deletePayment = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the payment record by ID
    const deletedPayment = await Payment.findByIdAndRemove(id);

    if (!deletedPayment) {
      return res.status(404).json({ error: 'Payment record not found' });
    }

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting payment record' });
  }
};
