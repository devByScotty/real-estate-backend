const express = require('express');
const router = express.Router();
const Purchase = require('../model/purchase');

// POST route to buy a property
router.post('/purchase', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      address
    } = req.body;

    const purchase = new Purchase({
      name,
      email,
      phone,
      address
    });

    await purchase.save();
    res.status(201).json(purchase);
  } catch (err) {
    console.error('Error buying property:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/getpurchase', async (req, res) => {
  try {
      const purchase = await Purchase.find();
      res.status(200).json(purchase);
      console.log('helloworld')
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});



module.exports = router;
