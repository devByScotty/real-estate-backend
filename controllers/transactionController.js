const Transaction = require('../model/transaction');
const nodemailer = require('nodemailer');

const sendConfirmationEmail = (name, email, bondPrice, phone, address) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  const mailOptions = {
    from: 'sjmathelele@gmail.com',
    to: email,
    subject: 'Property Purchase/Rent Confirmation',
    text: `Thank you, ${name}, for your interest in our property.
           Details:
           Bond Price: ${bondPrice}
           Phone: ${phone}
           Address: ${address}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error.toString());
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

const createTransaction = async (req, res) => {
  const { name, email, phone, address, bondPrice, propertyId, type } = req.body;

  const newTransaction = new Transaction({ name, email, phone, address, bondPrice, propertyId, type });

  try {
    await newTransaction.save();
    /*sendConfirmationEmail(name, email, bondPrice, phone, address); */
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createTransaction,
  getTransactions
};
