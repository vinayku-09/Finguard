// controllers/transactionController.js

const pool = require('../config/db');

// CREATE a new transaction
const createTransaction = async (req, res) => {
  try {
    const {
      sender_account,
      receiver_account,
      amount,
      currency,
      ip_address,
      latitude,
      longitude,
      risk_score,
      risk_level,
      decision,
      geo_flag,
      ip_flag,
      account_flag,
      reason,
    } = req.body;

    // Basic validation — these fields are required
    if (!sender_account || !receiver_account || !amount) {
      return res.status(400).json({
        message: "sender_account, receiver_account, and amount are required",
      });
    }

    // req.user.id comes from the auth middleware (the logged-in user)
    const result = await pool.query(
      `INSERT INTO transactions (
        user_id, sender_account, receiver_account, amount, currency,
        ip_address, latitude, longitude,
        risk_score, risk_level, decision,
        geo_flag, ip_flag, account_flag, reason
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
      RETURNING *`,
      [
        req.user.id,
        sender_account,
        receiver_account,
        amount,
        currency || 'INR',
        ip_address || null,
        latitude || null,
        longitude || null,
        risk_score || null,
        risk_level || null,
        decision || 'PENDING',
        geo_flag || false,
        ip_flag || false,
        account_flag || false,
        reason || null,
      ]
    );

    res.status(201).json({
      message: "Transaction created successfully",
      transaction: result.rows[0],
    });
  } catch (error) {
    console.error("Create transaction error:", error.message);
    res.status(500).json({ message: "Something went wrong while creating the transaction" });
  }
};

// GET all transactions for the logged-in user
const getMyTransactions = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM transactions
       WHERE user_id = $1
       ORDER BY transaction_time DESC`,
      [req.user.id]
    );

    res.json({
      count: result.rows.length,
      transactions: result.rows,
    });
  } catch (error) {
    console.error("Get transactions error:", error.message);
    res.status(500).json({ message: "Something went wrong while fetching transactions" });
  }
};

// GET a single transaction by ID (only if it belongs to the logged-in user)
const getTransactionById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `SELECT * FROM transactions WHERE id = $1 AND user_id = $2`,
      [id, req.user.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.json({ transaction: result.rows[0] });
  } catch (error) {
    console.error("Get transaction by id error:", error.message);
    res.status(500).json({ message: "Something went wrong while fetching the transaction" });
  }
};

module.exports = { createTransaction, getMyTransactions, getTransactionById };