// Import `check, validationResult` for checking validation results
const { check, validationResult } = require("express-validator");
//Import User Model
const User = require("../models/user");

// Validation Middleware for the /users route
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

// Validation Middleware for the /login route
const loginValidationRules = [
  check("mobile")
    .trim()
    .isLength({ min: 11, max: 11 })
    .withMessage("Mobile number must be 11 digits long"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];

// Validation middleware for the '/payments' route
const validatePayment = [
  check("users_id").isMongoId().withMessage("Invalid user ID"),
  check("month")
    .matches(
      /^(January|February|March|April|May|June|July|August|September|October|November|December)-\d{4}$/
    )
    .withMessage(
      "Invalid month format. Use 'Month-Year', e.g., 'January-2023'."
    ),
  check("payment_date").isISO8601().withMessage("Invalid date format"),
  check("amount").isNumeric().withMessage("Amount must be a number"),
];

// Validation middleware for the '/meals' route
const validateMeals = [
  check("users_id").isMongoId().withMessage("Invalid user ID"),
  check("qty").isNumeric().withMessage("Quantity must be a number"),
  check("date").isISO8601().withMessage("Invalid date format"),
];

// Validation middleware for the '/meal-rates' route
const validateMealRates = [
  check("month")
    .matches(
      /^(January|February|March|April|May|June|July|August|September|October|November|December)-\d{4}$/
    )
    .withMessage(
      "Invalid month format. Use 'Month-Year', e.g., 'January-2023'."
    ),
  check("meal_rate").isNumeric().withMessage("Meal rate must be a number"),
  check("is_visible").isNumeric().withMessage("is_visible must be a number"),
  check("month_start_date")
    .isISO8601()
    .withMessage("Invalid date format for month start date"),
  check("month_end_date")
    .isISO8601()
    .withMessage("Invalid date format for month end date"),
];

// Validation middleware for the '/meal-menus' route
const validateMealMenu = [
  check("meal_date")
    .isISO8601()
    .withMessage("Invalid date format for meal_date"),
  check("description").notEmpty().withMessage("Description cannot be empty"),
  check("recipe").notEmpty().withMessage("Recipe cannot be empty"),
];

// Validation middleware for the '/expenses' route
const validateExpense = [
  check("title").notEmpty().withMessage("Title cannot be empty"),
  check("qty").isNumeric().withMessage("Quantity must be a number"),
  check("unit").notEmpty().withMessage("Unit cannot be empty"),
  check("price").isNumeric().withMessage("Price must be a number"),
  check("total").isNumeric().withMessage("Total must be a number"),
  check("bajar_date")
    .isISO8601()
    .withMessage("Invalid date format for bajar_date"),
];

// Validation middleware result data
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
  validatePayment,
  validateMeals,
  validateMealRates,
  validateMealMenu,
  validateExpense,
  validateDataResult,
};
