const MealMenus = require("../models/mealMenus");

// Create a new meal menu (Admin)
exports.create_a_meal_menu = async (req, res) => {
  try {
    const { meal_date, description, recipe } = req.body;

    // Create a new meal menu record
    const newMealMenu = new MealMenus({
      meal_date,
      description,
      recipe,
      status: 1, // Default status for a new meal menu
      creator: req.userInfo.user._id,
    });

    // Save the new meal menu record to the database
    const savedMealMenu = await newMealMenu.save();

    return {
      message: "Meal menu created successfully",
      mealMenu: savedMealMenu,
    };
  } catch (error) {
    return { message: "Failed to create a meal menu" };
  }
};

// Get all meal menus (Admin and User)
exports.get_all_meal_menus_list = async (req, res) => {};

// Get a meal menu by ID (Admin)
exports.get_meal_by_id = async (req, res) => {};

// Update a meal menu (Admin)
exports.update_meal_data = async (req, res) => {};

// Delete a meal menu (Admin)
exports.delete_meal_data = async (req, res) => {};
