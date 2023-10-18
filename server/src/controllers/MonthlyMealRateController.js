const MonthlyMealRates = require("../models/monthlyMealRates");
const {
  set_a_meal_rate,
  get_all_meal_rate_list,
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

  // Get a meal rate by ID (Admin and User)
  getMealRateById: async (req, res) => {
    try {
      const mealRateId = req.params.id;
      const mealRate = await MonthlyMealRates.findById(mealRateId);
      if (!mealRate) {
        return res.status(404).json({ message: "Meal rate not found" });
      }
      res.status(200).json(mealRate);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch meal rate" });
    }
  },

  // Update a meal rate (Admin)
  updateMealRate: async (req, res) => {
    try {
      const mealRateId = req.params.id;
      const updatedMealRateData = req.body;
      const mealRate = await MonthlyMealRates.findByIdAndUpdate(
        mealRateId,
        updatedMealRateData,
        { new: true }
      );
      if (!mealRate) {
        return res.status(404).json({ message: "Meal rate not found" });
      }
      res.status(200).json(mealRate);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to update meal rate" });
    }
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
