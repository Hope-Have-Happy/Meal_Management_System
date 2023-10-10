const MonthlyMealRate = require('../models/MonthlyMealRate');

// Create a new monthly meal rate entry
exports.createMonthlyMealRate = async (req, res) => {
  try {
    const { month, meal_rate, is_visible, month_start_date, month_end_date } = req.body;

    // Create a new monthly meal rate entry
    const newMonthlyMealRate = new MonthlyMealRate({
      month,
      meal_rate,
      is_visible,
      month_start_date,
      month_end_date,
    });

    // Save the new monthly meal rate entry to the database
    const savedMonthlyMealRate = await newMonthlyMealRate.save();

    res.status(201).json(savedMonthlyMealRate);
  } catch (error) {
    res.status(500).json({ error: 'Error creating monthly meal rate entry' });
  }
};

// Get all monthly meal rate entries
exports.getAllMonthlyMealRates = async (req, res) => {
  try {
    // Retrieve all monthly meal rate entries
    const monthlyMealRates = await MonthlyMealRate.find();

    res.status(200).json(monthlyMealRates);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching monthly meal rate entries' });
  }
};

// Get monthly meal rate entries by date
exports.getMonthlyMealRatesByDate = async (req, res) => {
  try {
    const { date } = req.params;

    // Retrieve monthly meal rate entries for the specified date
    const monthlyMealRates = await MonthlyMealRate.find({ month: date });

    res.status(200).json(monthlyMealRates);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching monthly meal rate entries by date' });
  }
};

// Update a monthly meal rate entry by ID
exports.updateMonthlyMealRate = async (req, res) => {
  try {
    const { id } = req.params;
    const { month, meal_rate, is_visible, month_start_date, month_end_date } = req.body;

    // Find and update the monthly meal rate entry by ID
    const updatedMonthlyMealRate = await MonthlyMealRate.findByIdAndUpdate(
      id,
      {
        month,
        meal_rate,
        is_visible,
        month_start_date,
        month_end_date,
      },
      { new: true } // Return the updated document
    );

    if (!updatedMonthlyMealRate) {
      return res.status(404).json({ error: 'Monthly meal rate entry not found' });
    }

    res.status(200).json(updatedMonthlyMealRate);
  } catch (error) {
    res.status(500).json({ error: 'Error updating monthly meal rate entry' });
  }
};

// Delete a monthly meal rate entry by ID
exports.deleteMonthlyMealRate = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the monthly meal rate entry by ID
    const deletedMonthlyMealRate = await MonthlyMealRate.findByIdAndRemove(id);

    if (!deletedMonthlyMealRate) {
      return res.status(404).json({ error: 'Monthly meal rate entry not found' });
    }

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting monthly meal rate entry' });
  }
};
