// routes/transactionRoutes.js

const express = require('express');
const router = express.Router();
const {
  createTransaction,
  getMyTransactions,
  getTransactionById,
} = require('../controllers/transactionController');
const protect = require('../middleware/authMiddleware');

// All transaction routes require a valid logged-in user
router.post('/', protect, createTransaction);
router.get('/', protect, getMyTransactions);
router.get('/:id', protect, getTransactionById);

module.exports = router;