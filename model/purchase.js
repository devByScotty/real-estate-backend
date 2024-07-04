const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String
});

module.exports = mongoose.model('Purchase', purchaseSchema);