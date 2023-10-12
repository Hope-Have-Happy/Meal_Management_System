const { check, validationResult } = require("express-validator");

// create a new user validation ruels
const userValidationRules = [
  check("full_name").not().isEmpty().withMessage("Full name is required"),
  check("user_role")
    .optional()
    .isIn(["Admin", "User"])
    .withMessage("Invalid user role"),
  check("photo").optional(),
  check("email").isEmail().withMessage("Invalid email address"),
  check("password")
    .isLength({ min: 8 }) // Updated to require at least 8 characters
    .withMessage("Password must be at least 8 characters long"), // Updated the error message
  check("mobile")
    .isLength({ min: 11, max: 11 })
    .isNumeric()
    .withMessage("Mobile number must be 11 digits long"),
  check("department")
    .isIn(["IT", "IELTS", "SPOKEN", "EMPLOYEE"])
    .withMessage("Invalid department"),
  check("address").not().isEmpty().withMessage("Address is required"),
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

module.exports = {
  userValidationRules,
  validateUserData,
  loginValidationRules,
  validateLoginData,
};
