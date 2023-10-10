const MealMenu = require('../models/MealMenu');

// Create a new meal menu entry
exports.createMealMenu = async (req, res) => {
  try {
    const { meal_date, description, recipe, status, creator } = req.body;

    // Create a new meal menu entry
    const newMealMenu = new MealMenu({
      meal_date,
      description,
      recipe,
      status,
      creator,
    });

    // Save the new meal menu entry to the database
    const savedMealMenu = await newMealMenu.save();

    res.status(201).json(savedMealMenu);
  } catch (error) {
    res.status(500).json({ error: 'Error creating meal menu' });
  }
};

// Get all meal menu entries
exports.getAllMealMenus = async (req, res) => {
  try {
    // Retrieve all meal menu entries
    const mealMenus = await MealMenu.find();

    res.status(200).json(mealMenus);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching meal menus' });
  }
};

// Get meal menu entries by date
exports.getMealMenusByDate = async (req, res) => {
  try {
    const { date } = req.params;

    // Retrieve meal menu entries for the specified date
    const mealMenus = await MealMenu.find({ meal_date: date });

    res.status(200).json(mealMenus);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching meal menus by date' });
  }
};

// Update a meal menu entry by ID
exports.updateMealMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const { meal_date, description, recipe, status, creator } = req.body;

    // Find and update the meal menu entry by ID
    const updatedMealMenu = await MealMenu.findByIdAndUpdate(
      id,
      {
        meal_date,
        description,
        recipe,
        status,
        creator,
      },
      { new: true } // Return the updated document
    );

    if (!updatedMealMenu) {
      return res.status(404).json({ error: 'Meal menu not found' });
    }

    res.status(200).json(updatedMealMenu);
  } catch (error) {
    res.status(500).json({ error: 'Error updating meal menu' });
  }
};

// Delete a meal menu entry by ID
exports.deleteMealMenu = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the meal menu entry by ID
    const deletedMealMenu = await MealMenu.findByIdAndRemove(id);

    if (!deletedMealMenu) {
      return res.status(404).json({ error: 'Meal menu not found' });
    }

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting meal menu' });
  }
};
