const UserMeals = require("../models/userMeals"); // Import the UserMeals model
const User = require("../models/user"); // Import the UserMeals model
const {
  registerMeal,
  getAllMealsList,
  getMyMealsList,
  getMealByTheId,
  update_a_meal,
  delete_a_meal,
  reserve_a_meal,
  getReservedMealsList,
  confirm_a_meal,
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
    let result = await update_a_meal(req);
    return res.status(200).json(result);
  },

  // Delete a meal (Admin)
  deleteMeal: async (req, res) => {
    let result = await delete_a_meal(req);
    return res.status(200).json(result);
  },

  // Reserve meals for the next day until 6 PM (User)
  reserveMeals: async (req, res) => {
    let result = await reserve_a_meal(req);
    return res.status(200).json(result);
  },

  // Confirm a reserved meal
  confirmMealS: async (req, res) => {
    let result = await confirm_a_meal(req);
    return res.status(200).json(result);
  },

  // List user's reserved meal for the next day before 6 PM (User)
  getUserBookings: async (req, res) => {
    let result = await getReservedMealsList(req);
    return res.status(200).json(result);
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
