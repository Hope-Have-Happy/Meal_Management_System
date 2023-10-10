const express = require("express");
const router = express.Router();
const AccountLogController = require("../controllers/accountLogController");

// Create a new account log entry
router.post("/account-log", AccountLogController.createAccountLog);

// Get all account log entries
router.get("/account-logs", AccountLogController.getAllAccountLogs);

// Get account log entries by date
router.get(
  "/account-logs/date/:date",
  AccountLogController.getAccountLogsByDate
);

// Update an account log entry by ID
router.put("/account-log/:id", AccountLogController.updateAccountLog);

// Delete an account log entry by ID
router.delete("/account-log/:id", AccountLogController.deleteAccountLog);

module.exports = router;
