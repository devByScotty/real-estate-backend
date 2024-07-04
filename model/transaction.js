const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  bondPrice: Number,
  propertyId: Number,
  type: String // 'buy' or 'rent'
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
