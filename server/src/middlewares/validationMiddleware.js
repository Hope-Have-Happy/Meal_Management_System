const { check, validationResult } = require("express-validator");
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
    .optional()
    .isIn(["Admin", "User"])
    .withMessage("Invalid user role"),
  check("photo").optional(),
  check("email").trim().isEmail().withMessage("Invalid email address"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  check("mobile")
    .trim()
    .isLength({ min: 11, max: 11 })
    .isNumeric()
    .withMessage("Mobile number must be 11 digits long"),
  check("department")
    .trim()
    .isIn(["IT", "IELTS", "SPOKEN", "EMPLOYEE"])
    .withMessage("Invalid department"),
  check("address").trim().not().isEmpty().withMessage("Address is required"),
  check("status").optional().isInt().withMessage("Status must be an integer"),
];

// create a new user data validation result
const validateUserData = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// login validation ruels
const loginValidationRules = [
  check("mobile")
    .trim()
    .isLength({ min: 11, max: 11 })
    .withMessage("Mobile number must be 11 digits long"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];

// login validation result
const validateLoginData = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

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

// Validation middleware for updating user data
const validateUpdateData = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  userValidationRules,
  validateUserData,
  loginValidationRules,
  validateLoginData,
  userUpdateValidationRules,
  validateUpdateData,
};
