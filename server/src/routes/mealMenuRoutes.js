const express = require("express");
const router = express.Router();
const MealMenuController = require("../controllers/mealMenuController");

// Create a new meal menu entry
router.post("/meal-menu", MealMenuController.createMealMenu);

// Get all meal menu entries
router.get("/meal-menus", MealMenuController.getAllMealMenus);

// Get meal menu entries by date
router.get("/meal-menu/date/:date", MealMenuController.getMealMenusByDate);

// Update a meal menu entry by ID
router.put("/meal-menu/:id", MealMenuController.updateMealMenu);

// Delete a meal menu entry by ID
router.delete("/meal-menu/:id", MealMenuController.deleteMealMenu);

module.exports = router;
