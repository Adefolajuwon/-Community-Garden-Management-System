const express = require('express');
const userRouter = express.Router();
const { createUser } = require('../controllers/user.controller');
router.post('/register', createUser);
