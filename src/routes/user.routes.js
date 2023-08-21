const express = require('express');
const userRouter = express.Router();
const {
	createUser,
	getSpecificUser,
} = require('../controllers/user.controller');
userRouter.post('/register', createUser);
userRouter.get('/user/garden-plot', getSpecificUser);

module.exports = { userRouter };
