require('dotenv').config();
const express = require('express');
const session = require('express-session');
const { controllerAuthGoogle } = require('../controllers/auth.controller');
const { passportInstance } = require('../../lib/passport');
// const {
// 	controllerAuthGoogle,
// 	controllerInsertUser,
// 	controllerVerifyUserCredentials,
// 	controllerFetchLoggedInUser,
// 	sendEmail,
// } = require('../controllers/user.controller');

const authRouter = express.Router();
// Route to handle sending mails
authRouter.use(
	session({
		secret: process.env.SESSION_TOKEN,
		resave: false,
		saveUninitialized: false,
	})
);
authRouter.use(passportInstance.initialize());
authRouter.use(passportInstance.session());

authRouter.get(
	'/google',
	passportInstance.authenticate('google', { scope: ['email', 'profile'] })
);
authRouter.get(
	'/google/callback',
	passportInstance.authenticate('google', { failureRedirect: '/register' }),
	controllerAuthGoogle
);
module.exports = authRouter;
