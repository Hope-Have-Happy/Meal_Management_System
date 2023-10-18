const MonthlyMealRates = require("../models/monthlyMealRates");
const {
  set_a_meal_rate,
  get_all_meal_rate_list,
  get_meal_rate_by_id,
  update_meal_rate,
} = require("../services/mealRateServices");

const MonthlyMealRateController = {
  // Set meal rates for specific months (Admin)
  setMealRate: async (req, res) => {
    let result = await set_a_meal_rate(req);
    return res.status(200).json(result);
  },

  // Get all meal rates (Admin and User)
  getAllMealRates: async (req, res) => {
    let result = await get_all_meal_rate_list(req);
    return res.status(200).json(result);
  },

  // Get a meal rate by ID (Admin)
  getMealRateById: async (req, res) => {
    let result = await get_meal_rate_by_id(req);
    return res.status(200).json(result);
  },

  // Update a meal rate (Admin)
  updateMealRate: async (req, res) => {
    let result = await update_meal_rate(req);
    return res.status(200).json(result);
  },

  // Delete a meal rate (Admin)
  deleteMealRate: async (req, res) => {
    try {
      const mealRateId = req.params.id;
      const mealRate = await MonthlyMealRates.findByIdAndDelete(mealRateId);
      if (!mealRate) {
        return res.status(404).json({ message: "Meal rate not found" });
      }
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to delete meal rate" });
    }
  },
};

module.exports = MonthlyMealRateController;
