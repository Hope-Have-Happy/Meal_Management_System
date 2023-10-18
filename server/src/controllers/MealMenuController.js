const MealMenus = require("../models/mealMenus");

const MealMenuController = {
  // Create a new meal menu (Admin)
  createMealMenu: async (req, res) => {
    try {
      const mealMenuData = req.body;
      const mealMenu = await MealMenus.create(mealMenuData);
      res.status(201).json(mealMenu);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Meal menu creation failed" });
    }
  },

  // Get all meal menus (Admin and User)
  getAllMealMenus: async (req, res) => {
    try {
      const mealMenus = await MealMenus.find();
      res.status(200).json(mealMenus);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch meal menus" });
    }
  },

  // Get a meal menu by ID (Admin and User)
  getMealMenuById: async (req, res) => {
    try {
      const mealMenuId = req.params.id;
      const mealMenu = await MealMenus.findById(mealMenuId);
      if (!mealMenu) {
        return res.status(404).json({ message: "Meal menu not found" });
      }
      res.status(200).json(mealMenu);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch meal menu" });
    }
  },

  // Update a meal menu (Admin)
  updateMealMenu: async (req, res) => {
    try {
      const mealMenuId = req.params.id;
      const updatedMealMenuData = req.body;
      const mealMenu = await MealMenus.findByIdAndUpdate(
        mealMenuId,
        updatedMealMenuData,
        { new: true }
      );
      if (!mealMenu) {
        return res.status(404).json({ message: "Meal menu not found" });
      }
      res.status(200).json(mealMenu);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to update meal menu" });
    }
  },

  // Delete a meal menu (Admin)
  deleteMealMenu: async (req, res) => {
    try {
      const mealMenuId = req.params.id;
      const mealMenu = await MealMenus.findByIdAndDelete(mealMenuId);
      if (!mealMenu) {
        return res.status(404).json({ message: "Meal menu not found" });
      }
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to delete meal menu" });
    }
  },
};

module.exports = MealMenuController;
