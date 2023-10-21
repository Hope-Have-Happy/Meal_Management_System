const User = require("../models/user");
const UserPayments = require("../models/userPayments");

// Make a payment (Admin)
exports.make_a_user_payment = async (req, res) => {
  try {
    const { users_id, month, payment_date, amount } = req.body;
    // Check if the user making the payment exists
    const user = await User.findById(users_id);

    if (!user) {
      return { message: "User not found. Payment cannot be processed." };
    }

    // Check if a payment for the same month and user already exists
    const existingPayment = await UserPayments.findOne({ users_id, month });

    if (existingPayment) {
      return {
        message: "A payment for the same month and user already exists.",
      };
    }

    // Create a new payment record
    const newPayment = new UserPayments({
      users_id,
      month,
      payment_date,
      amount,
      status: 1,
      creator: req.userInfo.user._id,
    });

    // Save the payment record to the database
    const savedPayment = await newPayment.save();

    return {
      message: "Payment made successfully",
      payment: savedPayment,
    };
  } catch (error) {
    return { message: "Failed to make a payment" };
  }
};

// Get payment history for a logged-in user (User)
exports.payment_history = async (req, res) => {
  try {
    const userId = req.userInfo.user._id;

    // Find all payments for the logged-in user
    const paymentHistory = await UserPayments.find({ users_id: userId })
      .populate("users_id", "full_name email mobile") // Populate user details
      .exec();

    // Map the user details to a new key "user" in each payment object
    const paymentsHistoryWithUserDetails = paymentHistory.map((payment) => {
      return {
        user: {
          full_name: payment.users_id.full_name,
          email: payment.users_id.email,
          mobile: payment.users_id.mobile,
        },
        // Include other payment properties if needed
        _id: payment._id,
        month: payment.month,
        payment_date: payment.payment_date,
        amount: payment.amount,
        status: payment.status,
        creator: payment.creator,
      };
    });

    return {
      message: "Payment history retrieved successfully",
      paymentsHistories: paymentsHistoryWithUserDetails,
    };
  } catch (error) {
    return { message: "Failed to retrieve payment history" };
  }
};

// Get all payments (Admin)
exports.get_all_payment_list = async (req, res) => {
  try {
    // Find all payments
    const paymentList = await UserPayments.find()
      .populate("users_id", "full_name email mobile")
      .exec(); // Populate user details;

    // Map the user details to a new key "user" in each payment object
    const paymentsWithUserDetails = paymentList.map((payment) => {
      return {
        user: {
          full_name: payment.users_id.full_name,
          email: payment.users_id.email,
          mobile: payment.users_id.mobile,
        },
        // Include other payment properties if needed
        _id: payment._id,
        month: payment.month,
        payment_date: payment.payment_date,
        amount: payment.amount,
        status: payment.status,
        creator: payment.creator,
      };
    });

    return {
      message: "All payments retrieved successfully",
      paymentList: paymentsWithUserDetails,
    };
  } catch (error) {
    return { message: "Failed to retrieve payments" };
  }
};

// Get a payment by ID (Admin)
exports.get_payment_by_id = async (req, res) => {
  try {
    const paymentId = req.params.id; // Get the payment ID from the request parameters

    // Find the payment by ID
    const payment = await UserPayments.findById(paymentId)
      .populate("users_id", "full_name email mobile") // Populate user details;
      .exec();

    // Check if the payment exists
    if (!payment) {
      return { message: "Payment not found" };
    }

    // Map user details to a new "user" key in the response
    const paymentWithUserDetails = {
      user: {
        full_name: payment.users_id.full_name,
        email: payment.users_id.email,
        mobile: payment.users_id.mobile,
      },
      // Include other payment properties if needed
      _id: payment._id,
      month: payment.month,
      payment_date: payment.payment_date,
      amount: payment.amount,
      status: payment.status,
      creator: payment.creator,
      createdAt: payment.createdAt,
      updatedAt: payment.updatedAt,
    };

    return {
      message: "Payment retrieved successfully",
      payment: paymentWithUserDetails,
    };
  } catch (error) {
    return { message: "Failed to retrieve payment" };
  }
};

// Update a payment (Admin)
exports.update_payment_data = async (req, res) => {
  try {
    const paymentId = req.params.id; // Get the payment ID from the request parameters
    const updateData = req.body; // Get the updated data from the request body

    // Find the payment by ID and update it
    const updatedPayment = await UserPayments.findByIdAndUpdate(
      paymentId,
      {
        $set: {
          month: updateData.month,
          payment_date: updateData.payment_date,
          amount: updateData.amount,
          status: updateData.status,
        },
      },
      { new: true } // To return the updated document
    )
      .populate("users_id", "full_name email mobile") // Populate user details
      .exec();

    // Check if the payment exists
    if (!updatedPayment) {
      return { message: "Payment not found" };
    }

    // Map user details to a new "user" key in the response
    const paymentWithUserDetails = {
      user: {
        full_name: updatedPayment.users_id.full_name,
        email: updatedPayment.users_id.email,
        mobile: updatedPayment.users_id.mobile,
      },
      // Include other payment properties if needed
      _id: updatedPayment._id,
      month: updatedPayment.month,
      payment_date: updatedPayment.payment_date,
      amount: updatedPayment.amount,
      status: updatedPayment.status,
    };

    return {
      message: "Payment updated successfully",
      payment: paymentWithUserDetails,
    };
  } catch (error) {
    return { message: "Failed to update payment" };
  }
};

// Delete a payment (Admin)
exports.delete_payment_data = async (req, res) => {
  try {
    const paymentId = req.params.id; // Get the payment ID from the request parameters

    // Find the payment by ID
    const payment = await UserPayments.findById(paymentId);

    // Check if the payment exists
    if (!payment) {
      return { message: "Payment not found" };
    }

    // Delete the payment
    const deletedPayment = await UserPayments.findByIdAndDelete(paymentId);

    if (deletedPayment) {
      return {
        message: "Payment deleted successfully",
        payment: deletedPayment,
      };
    } else {
      return { message: "Failed to delete payment" };
    }
  } catch (error) {
    return { message: "Failed to delete payment" };
  }
};
