const express = require('express');
const router = express.Router();
const AccountLogController = require('../controllers/accountLogController');

// Create a new account log entry
router.post('/', AccountLogController.createAccountLog);

// Get all account log entries
router.get('/', AccountLogController.getAllAccountLogs);

// Get account log entries by date
router.get('/date/:date', AccountLogController.getAccountLogsByDate);

// Update an account log entry by ID
router.put('/:id', AccountLogController.updateAccountLog);

// Delete an account log entry by ID
router.delete('/:id', AccountLogController.deleteAccountLog);

module.exports = router;
