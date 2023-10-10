const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sendPasswordResetEmail } = require('../utils/email'); // You'll need to implement this function

// User login controller
exports.login = async (req, res) => {
  try {
    const { mobile, password } = req.body;

    // Find the user by mobile number
    const user = await User.findOne({ mobile });

    // If the user is not found, return an error
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the provided password with the user's hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If the password is invalid, return an error
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Generate a JSON Web Token (JWT) for authentication
    const token = jwt.sign({ userId: user.id }, 'your-secret-key', {
      expiresIn: '1h', // Token expires in 1 hour (adjust as needed)
    });

    // Return the token as a response
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// User logout controller (if needed)
exports.logout = (req, res) => {
  // Implement logout logic if required
};

// Password reset request controller
exports.requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if a user with the provided email exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Generate a unique reset token and expiration date
    const resetToken = jwt.sign({ userId: user.id }, 'your-secret-key', {
      expiresIn: '1h', // Token expires in 1 hour (adjust as needed)
    });

    // Send a password reset email with the reset token
    sendPasswordResetEmail(user.email, resetToken); // Implement this function

    res.status(200).json({ message: 'Password reset email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Password reset confirmation controller
exports.confirmPasswordReset = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    // Verify the reset token
    const decodedToken = jwt.verify(token, 'your-secret-key');

    // Find the user by the decoded user ID
    const user = await User.findById(decodedToken.userId);

    // If the user is not found, return an error
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
