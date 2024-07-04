require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to Database


// Import Routes
const propertyRoutes = require('./routes/properties');
const transactionRoutes = require('./routes/transaction');
const authRoutes = require('./routes/auth');
const purchaseRoutes = require('./routes/purchase');
const rentalRoutes = require('./routes/rental');

// Use Routes
app.use('/api/properties', propertyRoutes);
app.use('/api', transactionRoutes);
app.use('/api', authRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
