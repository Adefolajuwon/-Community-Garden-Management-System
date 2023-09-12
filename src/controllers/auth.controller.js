const { storeGoogleUser } = require('../models/user.models');
require('dotenv').config();
const jwt = require('jsonwebtoken');
async function controllerAuthGoogle(req, res, next) {
	try {
		if (!req.isAuthenticated()) {
			res.status(200).json({ error: 'user not authenticated' });
			return;
		}

		req.session.profile = req.user;
		if (!req.user) {
			res.status(505).json('Use not found');
			return;
		}
		console.log(req.user);
		const user = await storeGoogleUser(req.user);

		if (user?.error) {
			res.status(505).json('Error occured while trying to store usin n db');
			return;
		}

		let token = jwt.sign(
			{ _id: user._id, email: user.email },
			process.env.JWT_SECRET,
			{ expiresIn: '2h' }
		);
		console.log(token);
		// res.redirect(`http://localhost:8000/setauthtoken/${token}`);
	} catch (error) {
		console.log(error);
		res.status(501).json('internal error');
	}
	next();
}

module.exports = { controllerAuthGoogle };
