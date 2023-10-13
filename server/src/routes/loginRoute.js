// Import Express and create an Express Router for defining routes
const express = require("express");
const router = express.Router();

// Import the Login Controller for login-related logic
const { loginController } = require("../controllers/loginController");

// Import validation-related functions and middleware
const {
  validateDataResult,
  loginValidationRules,
} = require("../middlewares/validationMiddleware");

// Get all users (Open for all) ✔
router.get("/login", loginValidationRules, validateDataResult, loginController);

module.exports = router;
