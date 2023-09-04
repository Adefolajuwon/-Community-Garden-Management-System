require('dotenv').config();
const express = require('express');
const session = require('express-session');

const passportInstance = require('../lib/passport');
const {
	controllerAuthGoogle,
	controllerInsertUser,
	controllerVerifyUserCredentials,
	controllerFetchLoggedInUser,
	sendEmail,
} = require('../controllers/user.controller');

const authRouter = express.Router();
// Route to handle sending mails

module.exports = authRouter;
