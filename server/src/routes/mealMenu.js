// Import necessary controllers
const {
  createMealMenu,
  getAllMealMenus,
  getMealMenuById,
  updateMealMenu,
  deleteMealMenu,
} = require("../controllers/MealMenuController");

const express = require("express");
const router = express.Router();

// Meal Menu Routes
router.post("/meal-menus", createMealMenu);
router.get("/meal-menus", getAllMealMenus);
router.get("/meal-menus/:id", getMealMenuById);
router.put("/meal-menus/:id", updateMealMenu);
router.delete("/meal-menus/:id", deleteMealMenu);

module.exports = router;
