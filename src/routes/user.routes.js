const express = require('express');
const userRouter = express.Router();
const {
	createUser,
	getSpecificUser,
} = require('../controllers/user.controller');
userRouter.post('/register', createUser);
userRouter.get('/user/:username', getSpecificUser);

module.exports = { userRouter };
