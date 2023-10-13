const express = require("express");
const { loginController } = require("../controllers/loginController");
const {
  validateLoginData,
  loginValidationRules,
} = require("../middlewares/validationMiddleware");
const router = express.Router();

// Get all users (Open for all) ✔
router.get("/login", loginValidationRules, validateLoginData, loginController);

module.exports = router;
