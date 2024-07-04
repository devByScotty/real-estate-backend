const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const authMiddleware = require('../middleware/authMiddleware');

//router.post('/transactions', authMiddleware, transactionController.createTransaction);
router.post('/transactions',transactionController.createTransaction);
router.get('/gettransactions', transactionController.getTransactions);

module.exports = router;
