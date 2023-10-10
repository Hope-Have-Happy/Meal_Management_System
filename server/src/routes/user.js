// Import necessary controllers
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  login,
  getDashboard,
  bookMeal,
  getMealBookings,
  deleteMealBooking,
  getPaymentHistory,
  viewMatchList,
  updateUserProfile,
} = require("../controllers/UserController");

const express = require("express");
const router = express.Router();

// User Routes
router.post("/users", createUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.post("/login", login);
router.get("/dashboard", getDashboard);
router.post("/meal-booking", bookMeal);

/* (confusion লাগবে কী লাগবে না এটা নিয়ে বা লাগলেও আপডেট করতে হবে কী না............!) */
router.get("/meal-booking", getMealBookings);
router.delete("/meal-booking/:bookingId", deleteMealBooking);

/* (confusion লাগবে কী লাগবে না এটা নিয়ে বা লাগলেও আপডেট করতে হবে কী না............!) */
router.get("/payment-history", getPaymentHistory);

/* (confusion লাগবে কী লাগবে না এটা নিয়ে বা লাগলেও আপডেট করতে হবে কী না............!) */
router.get("/match-list", viewMatchList); // I think the controller name need to be changed
router.put("/update-profile", updateUserProfile);

module.exports = router;
