// Import `check, validationResult` for checking validation results
const { check, validationResult } = require("express-validator");
//Import User Model
const User = require("../models/user");

// create a new user validation rules
const userValidationRules = [
  check("full_name")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Full name is required"),
  check("user_role")
    .trim()
    .not()
    .isEmpty()
    .optional()
    .isIn(["Admin", "User"])
    .withMessage("Invalid user role"),
  check("photo").optional(),
  check("email")
    .trim()
    .isEmail()
    .toLowerCase()
    .withMessage("Invalid email address"),
  check("password")
    .not()
    .isEmpty()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  check("mobile")
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 11, max: 11 })
    .isNumeric()
    .withMessage("Mobile number must be 11 digits long"),
  check("department")
    .trim()
    .not()
    .isEmpty()
    .isIn(["IT", "IELTS", "SPOKEN", "EMPLOYEE"])
    .withMessage("Invalid department"),
  check("address").trim().not().isEmpty().withMessage("Address is required"),
  check("status").optional().isInt().withMessage("Status must be an integer"),
];

// login validation rules
const loginValidationRules = [
  check("mobile")
    .trim()
    .isLength({ min: 11, max: 11 })
    .withMessage("Mobile number must be 11 digits long"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];

// User update validation rules
const userUpdateValidationRules = [
  check("full_name")
    .trim()
    .optional()
    .not()
    .isEmpty()
    .withMessage("Full name is required"),
  check("user_role")
    .trim()
    .optional()
    .isIn(["Admin", "User"])
    .withMessage("Invalid user role"),
  check("photo").optional(),
  check("email")
    .trim()
    .optional()
    .isEmail()
    .withMessage("Invalid email address"),
  check("password")
    .optional()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  check("mobile")
    .trim()
    .optional()
    .isLength({ min: 11, max: 11 })
    .isNumeric()
    .withMessage("Mobile number must be 11 digits long"),
  check("department")
    .trim()
    .optional()
    .isIn(["IT", "IELTS", "SPOKEN", "EMPLOYEE"])
    .withMessage("Invalid department"),
  check("address")
    .trim()
    .optional()
    .not()
    .isEmpty()
    .withMessage("Address is required"),
  check("status").optional().isInt().withMessage("Status must be an integer"),
];

// Register meals for users validation rules
const mealRegisterOrBookingValidationRules = [
  check("users_id").trim().not().isEmpty().withMessage("User ID is required"),
  check("qty")
    .trim()
    .not()
    .isEmpty()
    .isInt()
    .withMessage("Quantity must be an integer and required"),
  check("date")
    .trim()
    .not()
    .isEmpty()
    .isDate()
    .withMessage("Quantity must be an integer and required"),
  check("status")
    .optional()
    .isInt()
    .withMessage("Status must be an integer and required"),
  check("creator").trim().not().isEmpty().withMessage("Creator ID is required"),
];

// Validation middleware for updating user data
const validateDataResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg); // Extract error messages
    return res.status(400).json({ error: errorMessages[0] }); // Return the first error message
  }

  next();
};

module.exports = {
  userValidationRules,
  loginValidationRules,
  userUpdateValidationRules,
  validateDataResult,
};
