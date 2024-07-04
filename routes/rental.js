const express = require('express');
const router = express.Router();
const Rental = require('../model/rental');

// POST route to rent a property
router.post('/rent', async (req, res) => {
  try {
    const {
      propertyId,
      renterName,
      renterEmail,
      renterPhone,
      renterAddress,
      rentStartDate,
      rentEndDate
    } = req.body;

    const rental = new Rental({
      property: propertyId,
      renterName,
      renterEmail,
      renterPhone,
      renterAddress,
      rentStartDate,
      rentEndDate
    });

    await rental.save();
    res.status(201).json(rental);
  } catch (err) {
    console.error('Error renting property:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
