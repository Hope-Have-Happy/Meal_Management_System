const DailyBajar = require('../models/DailyBajar');

// Create a new daily bajar entry
exports.createDailyBajar = async (req, res) => {
  try {
    const { title, qty, unit, price, total, bajar_date } = req.body;

    // Create a new daily bajar entry
    const newDailyBajar = new DailyBajar({
      title,
      qty,
      unit,
      price,
      total,
      bajar_date,
    });

    // Save the new entry to the database
    const savedDailyBajar = await newDailyBajar.save();

    res.status(201).json(savedDailyBajar);
  } catch (error) {
    res.status(500).json({ error: 'Error creating daily bajar entry' });
  }
};

// Get all daily bajar entries
exports.getAllDailyBajars = async (req, res) => {
  try {
    const dailyBajars = await DailyBajar.find();

    res.status(200).json(dailyBajars);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching daily bajar entries' });
  }
};

// Get daily bajar entries by date
exports.getDailyBajarsByDate = async (req, res) => {
  try {
    const { date } = req.params;

    const dailyBajars = await DailyBajar.find({ bajar_date: date });

    res.status(200).json(dailyBajars);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching daily bajar entries by date' });
  }
};

// Update a daily bajar entry by ID
exports.updateDailyBajar = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, qty, unit, price, total, bajar_date } = req.body;

    const updatedDailyBajar = await DailyBajar.findByIdAndUpdate(
      id,
      {
        title,
        qty,
        unit,
        price,
        total,
        bajar_date,
      },
      { new: true }
    );

    if (!updatedDailyBajar) {
      return res.status(404).json({ error: 'Daily bajar entry not found' });
    }

    res.status(200).json(updatedDailyBajar);
  } catch (error) {
    res.status(500).json({ error: 'Error updating daily bajar entry' });
  }
};

// Delete a daily bajar entry by ID
exports.deleteDailyBajar = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedDailyBajar = await DailyBajar.findByIdAndRemove(id);

    if (!deletedDailyBajar) {
      return res.status(404).json({ error: 'Daily bajar entry not found' });
    }

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting daily bajar entry' });
  }
};
