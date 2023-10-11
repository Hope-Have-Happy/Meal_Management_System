const express = require("express");
const router = express.Router();

const MealMenuController = require("../controllers/MealMenuController");

// Create a new meal menu (Admin)
router.post("/meal-menus", MealMenuController.createMealMenu);

// Get all meal menus (Admin and User)
router.get("/meal-menus", MealMenuController.getAllMealMenus);

// Get a meal menu by ID (Admin and User)
router.get("/meal-menus/:id", MealMenuController.getMealMenuById);

// Update a meal menu (Admin)
router.put("/meal-menus/:id", MealMenuController.updateMealMenu);

// Delete a meal menu (Admin)
router.delete("/meal-menus/:id", MealMenuController.deleteMealMenu);

module.exports = router;
