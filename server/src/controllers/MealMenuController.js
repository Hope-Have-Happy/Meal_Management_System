// Meal Menu CRUD Related Services
const {
  delete_meal_data,
  update_meal_data,
  get_meal_by_id,
  get_all_meal_menus_list,
  create_a_meal_menu,
} = require("../services/mealMenuServices");

const MealMenuController = {
  // Create a new meal menu (Admin)
  createMealMenu: async (req, res) => {
    let result = await create_a_meal_menu(req);
    return res.status(200).json(result);
  },

  // Get all meal menus (Admin and User)
  getAllMealMenus: async (req, res) => {
    let result = await get_all_meal_menus_list(req);
    return res.status(200).json(result);
  },

  // Get a meal menu by ID (Admin)
  getMealMenuById: async (req, res) => {
    let result = await get_meal_by_id(req);
    return res.status(200).json(result);
  },

  // Update a meal menu (Admin)
  updateMealMenu: async (req, res) => {
    let result = await update_meal_data(req);
    return res.status(200).json(result);
  },

  // Delete a meal menu (Admin)
  deleteMealMenu: async (req, res) => {
    let result = await delete_meal_data(req);
    return res.status(200).json(result);
  },
};

module.exports = MealMenuController;
