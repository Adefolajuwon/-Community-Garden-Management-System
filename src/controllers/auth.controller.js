const { storeGoogleUser } = require('../models/user.models');
require('dotenv').config();
const jwt = require('jsonwebtoken');
async function controllerAuthGoogle(req, res, next) {
	try {
		if (!req.isAuthenticated()) {
			res.status(200).json({ error: 'user not authenticated' });
		}
		req.session.profile = req.user;
		const user = await storeGoogleUser(req.user);
		console.log(user);

		if (user?.error) {
			res.redirect(`/login?success=false&message=Authentication failed`);
			return;
		}
		let token = jwt.sign(
			{ _id: user._id, email: user.email },
			process.env.JWT_SECRET,
			{ expiresIn: '7d' }
		);
		console.log(token);
		res.redirect(`http://localhost:8000/setauthtoken/${token}`);
	} catch (error) {
		console.log(error);
		res.status(501).json(error);
	}
	next();
}
module.exports = { controllerAuthGoogle };
