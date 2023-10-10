const Settings = require('../models/Settings');

// Create a new settings record
exports.createSettings = async (req, res) => {
  try {
    const newSettingsData = req.body;
    const newSettings = new Settings(newSettingsData);
    const savedSettings = await newSettings.save();
    res.status(201).json(savedSettings);
  } catch (error) {
    res.status(500).json({ error: 'Error creating settings record' });
  }
};

// Get settings by ID
exports.getSettingsById = async (req, res) => {
  try {
    const { id } = req.params;
    const settings = await Settings.findById(id);
    if (!settings) {
      return res.status(404).json({ error: 'Settings not found' });
    }
    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching settings by ID' });
  }
};

// Update settings by ID
exports.updateSettings = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSettingsData = req.body;
    const updatedSettings = await Settings.findByIdAndUpdate(
      id,
      updatedSettingsData,
      { new: true } // Return the updated document
    );
    if (!updatedSettings) {
      return res.status(404).json({ error: 'Settings not found' });
    }
    res.status(200).json(updatedSettings);
  } catch (error) {
    res.status(500).json({ error: 'Error updating settings by ID' });
  }
};

// Delete settings by ID
exports.deleteSettings = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSettings = await Settings.findByIdAndRemove(id);
    if (!deletedSettings) {
      return res.status(404).json({ error: 'Settings not found' });
    }
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting settings by ID' });
  }
};
