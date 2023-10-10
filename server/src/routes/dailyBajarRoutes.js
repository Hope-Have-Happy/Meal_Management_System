const express = require("express");
const router = express.Router();
const DailyBajarController = require("../controllers/dailyBajarController");

// Create a new daily bajar entry
router.post("/daily-bazar", DailyBajarController.createDailyBajar);

// Get all daily bajar entries
router.get("/daily-bazars", DailyBajarController.getAllDailyBajars);

// Get daily bajar entries by date
router.get(
  "/daily-bazar/date/:date",
  DailyBajarController.getDailyBajarsByDate
);

// Update a daily bajar entry by ID
router.put("/daily-bazar/:id", DailyBajarController.updateDailyBajar);

// Delete a daily bajar entry by ID
router.delete("/daily-bazar/:id", DailyBajarController.deleteDailyBajar);

module.exports = router;
