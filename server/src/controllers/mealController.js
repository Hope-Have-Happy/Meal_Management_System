const Meal = require('../models/Meal');

// Create a new meal record
exports.createMeal = async (req, res) => {
  try {
    const { date, userId, quantity } = req.body;

    // Create a new meal record
    const newMeal = new Meal({
      date,
      userId,
      quantity,
    });

    // Save the new meal record to the database
    const savedMeal = await newMeal.save();

    res.status(201).json(savedMeal);
  } catch (error) {
    res.status(500).json({ error: 'Error creating meal record' });
  }
};

// Get all meal records
exports.getAllMeals = async (req, res) => {
  try {
    // Retrieve all meal records
    const meals = await Meal.find();

    res.status(200).json(meals);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching meal records' });
  }
};

// Get meal records by date
exports.getMealsByDate = async (req, res) => {
  try {
    const { date } = req.params;

    // Retrieve meal records for the specified date
    const meals = await Meal.find({ date });

    res.status(200).json(meals);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching meal records by date' });
  }
};

// Update a meal record by ID
exports.updateMeal = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, userId, quantity } = req.body;

    // Find and update the meal record by ID
    const updatedMeal = await Meal.findByIdAndUpdate(
      id,
      {
        date,
        userId,
        quantity,
      },
      { new: true } // Return the updated document
    );

    if (!updatedMeal) {
      return res.status(404).json({ error: 'Meal record not found' });
    }

    res.status(200).json(updatedMeal);
  } catch (error) {
    res.status(500).json({ error: 'Error updating meal record' });
  }
};

// Delete a meal record by ID
exports.deleteMeal = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the meal record by ID
    const deletedMeal = await Meal.findByIdAndRemove(id);

    if (!deletedMeal) {
      return res.status(404).json({ error: 'Meal record not found' });
    }

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting meal record' });
  }
};
