const MonthlyMealRates = require("../models/monthlyMealRates");

const MonthlyMealRateController = {
  // Set meal rates for specific months (Admin)
  setMealRate: async (req, res) => {
    try {
      const { month, meal_rate, is_visible, month_start_date, month_end_date } =
        req.body;

      // Create a new meal rate entry
      const mealRate = await MonthlyMealRate.create({
        month,
        meal_rate,
        is_visible,
        month_start_date,
        month_end_date,
        creator: req.user._id, // Assuming you have authentication middleware to get the admin's user ID
      });

      res.status(201).json(mealRate);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to set meal rate" });
    }
  },

  // Get all meal rates (Admin and User)
  getAllMealRates: async (req, res) => {
    try {
      const mealRates = await MonthlyMealRates.find().sort({ month: "desc" });
      res.status(200).json(mealRates);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch meal rates" });
    }
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
