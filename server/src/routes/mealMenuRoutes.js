const express = require("express");
const router = express.Router();

const MealMenuController = require("../controllers/MealMenuController");

// Meal Menu Management
// Create a new meal menu
router.post("/meal-menus", MealMenuController.createMealMenu);

// Get all meal menus
router.get("/meal-menus", MealMenuController.getAllMealMenus);

// Get a meal menu by ID
router.get("/meal-menus/:id", MealMenuController.getMealMenuById);

// Update a meal menu
router.put("/meal-menus/:id", MealMenuController.updateMealMenu);

// Delete a meal menu
router.delete("/meal-menus/:id", MealMenuController.deleteMealMenu);

module.exports = router;
