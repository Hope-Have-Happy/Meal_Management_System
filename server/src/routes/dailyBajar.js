// Import necessary controllers
const {
  createDailyBajar,
  getAllDailyBajars,
  getDailyBajarById,
  updateDailyBajar,
  deleteDailyBajar,
} = require("../controllers/DailyBajarController");

const express = require("express");
const router = express.Router();

// Daily Bajar Routes
router.post("/daily-bajars", createDailyBajar);
router.get("/daily-bajars", getAllDailyBajars);
router.get("/daily-bajars/:id", getDailyBajarById);
router.put("/daily-bajars/:id", updateDailyBajar);
router.delete("/daily-bajars/:id", deleteDailyBajar);

module.exports = router;
