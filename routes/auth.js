const express = require('express');
const { registerUser, loginUser, getAllUsers, getCurrentUser } = require('../controllers/authController');
const verifyToken = require('../middleware/verifyToken.js');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', verifyToken, getAllUsers);
router.get('/current-user', verifyToken, getCurrentUser);

module.exports = router;
