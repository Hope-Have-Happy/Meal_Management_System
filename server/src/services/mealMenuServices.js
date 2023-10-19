const MealMenus = require("../models/mealMenus");

// Create a new meal menu (Admin)
exports.create_a_meal_menu = async (req, res) => {
  try {
    const { meal_date, description, status, recipe } = req.body;

    // Create a new meal menu record
    const newMealMenu = new MealMenus({
      meal_date,
      description,
      recipe,
      status,
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
exports.get_all_meal_menus_list = async (req, res) => {
  try {
    const mealMenus = await MealMenus.find().exec();
    return {
      message: "All meal menus retrieved successfully",
      mealMenus,
    };
  } catch (error) {
    return { message: "Failed to retrieve meal menus" };
  }
};

// Get a meal menu by ID (Admin)
exports.get_meal_by_id = async (req, res) => {
  try {
    const mealMenuId = req.params.id; // Get the meal menu ID from the request parameters

    // Find the meal menu by ID
    const mealMenu = await MealMenus.findById(mealMenuId).exec();

    // Check if the meal menu exists
    if (!mealMenu) {
      return { message: "Meal menu not found" };
    }

    return {
      message: "Meal menu retrieved successfully",
      mealMenu,
    };
  } catch (error) {
    return { message: "Failed to retrieve meal menu" };
  }
};

// Update a meal menu (Admin)
exports.update_meal_data = async (req, res) => {
  try {
    const mealMenuId = req.params.id; // Get the meal menu ID from the request parameters
    const updatedData = req.body; // Updated data for the meal menu

    // Find and update the meal menu by ID
    const updatedMealMenu = await MealMenus.findByIdAndUpdate(
      mealMenuId,
      updatedData,
      { new: true }
    );

    if (!updatedMealMenu) {
      return { message: "Meal menu not found" };
    }

    return {
      message: "Meal menu updated successfully",
      mealMenu: updatedMealMenu,
    };
  } catch (error) {
    return { message: "Failed to update meal menu" };
  }
};

// Delete a meal menu (Admin)
exports.delete_meal_data = async (req, res) => {};
