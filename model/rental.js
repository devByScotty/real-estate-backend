const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String
});

module.exports = mongoose.model('Rental', rentalSchema);
