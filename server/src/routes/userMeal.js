// Import necessary controllers
const {
  createUserMeal,
  getUserMealById,
  updateUserMeal,
  deleteUserMeal,
} = require("../controllers/UserMealController");

const express = require("express");
const router = express.Router();

// User Meal Routes
router.post("/user-meals", createUserMeal);
router.get("/user-meals/:id", getUserMealById);
router.put("/user-meals/:id", updateUserMeal);
router.delete("/user-meals/:id", deleteUserMeal);

module.exports = router;
