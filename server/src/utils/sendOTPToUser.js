const nodemailer = require("nodemailer");
const OTP = require("../models/otp");

async function sendOTPToUser(user, email) {
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
    // Your email configuration here
  });

  const mailOptions = {
    to: email,
    subject: "Password Reset OTP",
    text: `Your OTP for password reset is: ${generatedOTP}`,
  };

  await transporter.sendMail(mailOptions);
}

module.exports = sendOTPToUser;
