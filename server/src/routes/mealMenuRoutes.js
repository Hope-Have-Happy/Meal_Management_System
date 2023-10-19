// Import Express and create an Express Router for defining routes
const express = require("express");
const router = express.Router();

// Import the Meal Menu Controller for meal-menu-related logic
const MealMenuController = require("../controllers/MealMenuController");
const { isLoggedIn, isAdmin } = require("../middlewares/authMiddleware");

// Create a new meal menu (Admin)
router.post(
  "/meal-menus",
  isLoggedIn,
  isAdmin,
  MealMenuController.createMealMenu
);

// Get all meal menus (Admin and User)
router.get("/meal-menus", isLoggedIn, MealMenuController.getAllMealMenus);

// Get a meal menu by ID (Admin)
router.get(
  "/meal-menus/:id",
  isLoggedIn,
  isAdmin,
  MealMenuController.getMealMenuById
);

// Update a meal menu (Admin)
router.put(
  "/meal-menus/:id",
  isLoggedIn,
  isAdmin,
  MealMenuController.updateMealMenu
);

// Delete a meal menu (Admin)
router.delete(
  "/meal-menus/:id",
  isLoggedIn,
  isAdmin,
  MealMenuController.deleteMealMenu
);

module.exports = router;

/* 

@ এই মিল মেনু নিয়ে তেমন কিছুই দেখলাম না doc-এ, এটা clear করতে হবে........................!
@ এটা UI তে কীভাবে কী দেখাতে হবে বা আদৌও দেখাতে হবে কি না এটাও জানতে হবে...............!

*/
