// Import nodemailer to send email
const nodemailer = require("nodemailer");

// Import file system and path modules
const fs = require("fs");
const path = require("path");

// Import user,otp model and password hashing utility
const User = require("../models/user");
const OPT = require("../models/OTP");
const { hashPassword } = require("../utils/passwordUtils");
const emailConfig = require("../utils/emailConfig");

// get all users info (Admin)
exports.getAllUsersInfo = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // Exclude the 'password' field

    if (users.length === 0) {
      return { error: "No users found" };
    }

    return users;
  } catch (error) {
    return { error: "An error occurred while fetching users" };
  }
};

// get single user's info (Admin)
exports.getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) {
      return { error: "User not found" };
    }

    // Omit the password field from the user object
    const { password, ...userWithoutPassword } = user.toObject();

    return userWithoutPassword;
  } catch (error) {
    return { error: "An error occurred while fetching user info" };
  }
};

// get single user's info (Admin)
exports.createSingleUser = async (req, res) => {
  try {
    // Checking if the email or mobile number already exists in the database
    const { email, mobile } = req.body;

    if (await User.exists({ email })) {
      return { error: "Email is already in use" };
    }

    if (await User.exists({ mobile })) {
      return { error: "Mobile number is already in use" };
    }

    // Specify the absolute path for the "public" folder
    const publicPath = path.join(__dirname, "../../public");

    // Create a directory with the user's ObjectId for storing uploads
    const newUser = await User.create(req.body);
    const userId = newUser._id;
    const uploadDir = path.join(publicPath, "uploads", userId.toString());

    if (req.files && req.files.photo) {
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const photo = req.files.photo;

      const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp"]; // Add more extensions if needed

      const fileExtension = path.extname(photo.name).toLowerCase();

      if (!allowedExtensions.includes(fileExtension)) {
        // Delete the newly created user if the file type is invalid
        await User.findByIdAndDelete(newUser._id);

        return { error: "Invalid file type. Only image files are allowed." };
      }

      const photoPath = path.join(uploadDir, "profile.jpg");

      photo.mv(photoPath, (err) => {
        if (err) {
          console.error("Error uploading profile picture: ", err);
        }
      });

      newUser.photo = `/uploads/${userId.toString()}/profile.jpg`;
      await newUser.save();
    }

    // Return the user data
    const { password, ...userWithoutPassword } = newUser.toObject();
    return userWithoutPassword;
  } catch (error) {
    return { error: "An error occurred while creating the user" };
  }
};

// update single user's data (Admin & User: "User's own details")
exports.updateUserInfo = async (req, res) => {
  try {
    const id = req.params.userId;
    const updatedUser = req.body;

    // Check if the user wants to update the password
    if (updatedUser.password) {
      // Hash the new password before storing it in the database
      const hashedPassword = await hashPassword(updatedUser.password);
      updatedUser.password = hashedPassword;
    }

    // Check if the user wants to update the image
    if (req.files && req.files.photo) {
      const photo = req.files.photo;

      const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp"]; // Add more extensions if needed

      const fileExtension = path.extname(photo.name).toLowerCase();

      if (!allowedExtensions.includes(fileExtension)) {
        return { error: "Invalid file type. Only image files are allowed." };
      }

      const user = await User.findById(id);
      if (!user) {
        return { error: "User not found" };
      }

      // Specify the absolute path for the "public" folder
      const publicPath = path.join(__dirname, "../../public");

      // Create a directory with the user's ObjectId for storing uploads
      const userId = user._id;
      const uploadDir = path.join(publicPath, "uploads", userId.toString());

      // Check if the user directory and the previous image exist
      if (fs.existsSync(uploadDir)) {
        const previousImagePath = path.join(uploadDir, "profile.jpg");

        if (fs.existsSync(previousImagePath)) {
          // Delete the previous image
          fs.unlinkSync(previousImagePath);
        }
      }

      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      // Handle file upload (if a new image is uploaded)
      const photoPath = path.join(uploadDir, "profile.jpg");

      photo.mv(photoPath, (err) => {
        if (err) {
          console.error("Error uploading profile picture: ", err);
        }
      });

      updatedUser.photo = `/uploads/${userId.toString()}/profile.jpg`;
    }

    // Check if the user wants to update the email or mobile number
    const existingUserWithEmail = await User.findOne({
      _id: { $ne: id }, // Exclude the current user
      email: updatedUser.email,
    });

    const existingUserWithMobile = await User.findOne({
      _id: { $ne: id }, // Exclude the current user
      mobile: updatedUser.mobile,
    });

    if (existingUserWithEmail) {
      return { error: "Email already in use" };
    }

    if (existingUserWithMobile) {
      return { error: "Mobile already in use" };
    }

    // Update the user in the database
    const user = await User.findByIdAndUpdate(id, updatedUser, { new: true });

    if (!user) {
      return { error: "User not found" };
    }

    return user;
  } catch (error) {
    return { error: "An error occurred while updating the user" };
  }
};

// send otp
exports.SendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return { error: "User not found" };
    }

    // Generate a random OTP
    const generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

    // Set OTP expiration (e.g., 15 minutes from now)
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    // Save OTP in the OTP model
    const otpRecord = new OTP({
      user: user._id,
      otp: generatedOTP,
      expiresAt,
    });
    await otpRecord.save();

    // Send the OTP via email
    const transporter = nodemailer.createTransport({
      service: emailConfig.service,
      auth: {
        user: emailConfig.auth.user,
        pass: emailConfig.auth.pass,
      },
    });

    // Send the OTP via email
    const mailOptions = {
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP for password reset is: ${generatedOTP}`,
    };

    await transporter.sendMail(mailOptions);

    return { message: "OTP sent to the user's email" };
  } catch (error) {
    return { error: "An error occurred while sending otp to the user" };
  }
};

// reset password
exports.resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;

    // Find the OTP record
    const otpRecord = await OTP.findOne({
      otp,
      expiresAt: { $gt: new Date() },
    });

    if (!otpRecord) {
      return { error: "Invalid or expired OTP" };
    }

    // Find the user associated with the OTP
    const user = await User.findById(otpRecord.user);

    if (!user || user.email !== email) {
      return { error: "Invalid email" };
    }

    // Hash the new password
    const hashedPassword = await hashPassword(newPassword);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    // Delete the OTP record
    await OTP.findByIdAndDelete(otpRecord._id);

    return { message: "Password reset successful" };
  } catch (error) {
    return { error: "An error occurred while resetting password" };
  }
};

// delete single user (Admin)
exports.deleteSingleUser = async (req, res) => {
  try {
    const id = req.params.userId;
    const user = await User.findById(id);
    if (!user) {
      return { error: "User not found" };
    }

    if (user?.user_role === "Admin") {
      return { error: "Admin can't delete own ID." };
    }

    // Delete the user's folder and its contents
    const publicPath = path.join(__dirname, "../../public");
    const userId = user._id;
    const uploadDir = path.join(publicPath, "uploads", userId.toString());

    if (fs.existsSync(uploadDir)) {
      fs.rmSync(uploadDir, { recursive: true });
    }

    // Now, you can proceed to delete the user from the database
    const deletedUser = await User.findByIdAndRemove(id);

    if (!deletedUser) {
      return { error: "An error occurred while deleting the user" };
    }

    return deletedUser;
  } catch (error) {
    return { error: "An error occurred while deleting the user" };
  }
};
