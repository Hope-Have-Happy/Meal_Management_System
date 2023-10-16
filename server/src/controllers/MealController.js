const UserMeals = require("../models/userMeals"); // Import the UserMeals model
const User = require("../models/user"); // Import the UserMeals model
const {
  registerMeal,
  getAllMealsList,
  getMyMealsList,
  getMealByTheId,
} = require("../services/mealServices");

const MealController = {
  // Register meals for users (Admin) (Multiple or single meal register)
  registerMeals: async (req, res) => {
    let result = await registerMeal(req);
    return res.status(200).json(result);
  },

  // Get all meals (Admin)
  getAllMeals: async (req, res) => {
    let result = await getAllMealsList(req);
    return res.status(200).json(result);
  },

  // Get all meals of logged in user's (View a list of meals)
  getMyMealList: async (req, res) => {
    let result = await getMyMealsList(req);
    return res.status(200).json(result);
  },

  // Get a meal by ID (Admin)
  getMealById: async (req, res) => {
    let result = await getMealByTheId(req);
    return res.status(200).json(result);
  },

  // Update a meal (Admin)
  updateMeal: async (req, res) => {
    try {
      const mealId = req.params.id;
      const updatedMealData = req.body;
      const meal = await UserMeals.findByIdAndUpdate(mealId, updatedMealData, {
        new: true,
      });
      if (!meal) {
        return res.status(404).json({ message: "Meal not found" });
      }
      res.status(200).json(meal);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to update meal" });
    }
  },

  // Delete a meal (Admin)
  deleteMeal: async (req, res) => {
    try {
      const mealId = req.params.id;
      const meal = await UserMeals.findByIdAndDelete(mealId);
      if (!meal) {
        return res.status(404).json({ message: "Meal not found" });
      }
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to delete meal" });
    }
  },

  // Reserve meals for the next day until 6 PM (User)
  reserveMeals: async (req, res) => {
    try {
      // Implement reservation logic here

      // reserve meal's status at first will be 0

      res.status(200).json({ message: "Meals reserved successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to reserve meals" });
    }
  },

  // Confirm reserve meals (Multiple or single meal confirm)
  confirmMealS: async (req, res) => {
    try {
      // Implement confirm meals logic here

      // reserve meal's status will be 1 when admin confirm it

      res.status(200).json({ message: "Meals booking confirm successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to reserve meals" });
    }
  },

  // List user's bookings and cancel bookings for the next day before 6 PM (User)
  getUserBookings: async (req, res) => {
    try {
      // Implement booking listing logic here
      res.status(200).json({ message: "User bookings retrieved successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to retrieve user bookings" });
    }
  },

  // cancel meal (Admin and User)
  cancelBooking: async (req, res) => {
    try {
      const bookingId = req.params.id;
      // Implement booking cancellation logic here
      res.status(204).json({ message: "Booking canceled successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to cancel booking" });
    }
  },
};

module.exports = MealController;
