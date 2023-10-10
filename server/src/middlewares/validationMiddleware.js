const { validationResult } = require("express-validator");

/* mock-up code */
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next(); // Proceed to the controller if validation passes
};

module.exports = { validateRequest };
