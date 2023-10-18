const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { comparePassword } = require("../utils/passwordUtils");

exports.loginController = async (req, res) => {
  const { mobile, password } = req.body;
  try {
    // Find the user by email
    const user = await User.findOne({ mobile });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Check if the provided password matches the stored hashed password
    const passwordMatch = await comparePassword(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Create a user object without the password
    const userWithoutPassword = { ...user.toObject(), password: undefined };
    delete userWithoutPassword.password;

    // Generate a JWT token
    const token = jwt.sign(
      { user: userWithoutPassword },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h", // Set the expiration time as needed
      }
    );
    res.cookie("accessToken", token);
    res.status(200).json({ user: userWithoutPassword, accessToken: token });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while logging in" });
  }
};
