const express = require('express');
const userRouter = express.Router();
const { createUser } = require('../controllers/user.controller');
userRouter.post('/register', createUser);
module.exports = { userRouter };
