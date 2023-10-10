const MealBooking = require('../models/MealBooking');

// User meal booking route
exports.bookMeal = async (req, res) => {
  try {
    const { userId, date } = req.body;

    // Check if the user already has a booking for the given date
    const existingBooking = await MealBooking.findOne({ userId, date });

    if (existingBooking) {
      return res.status(400).json({ error: 'Meal booking for this date already exists' });
    }

    // Create a new meal booking entry
    const newMealBooking = new MealBooking({
      userId,
      date,
    });

    // Save the new booking to the database
    const savedMealBooking = await newMealBooking.save();

    res.status(201).json(savedMealBooking);
  } catch (error) {
    res.status(500).json({ error: 'Error booking meal' });
  }
};

// User meal booking list route
exports.getMealBookingList = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you have a middleware for authentication

    // Get the meal booking list for the authenticated user
    const mealBookings = await MealBooking.find({ userId });

    res.status(200).json(mealBookings);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching meal booking list' });
  }
};

// User meal booking cancellation route
exports.cancelMealBooking = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the meal booking entry by ID
    const deletedMealBooking = await MealBooking.findByIdAndRemove(id);

    if (!deletedMealBooking) {
      return res.status(404).json({ error: 'Meal booking not found' });
    }

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error canceling meal booking' });
  }
};
