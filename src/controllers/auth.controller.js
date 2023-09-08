const { storeGoogleUser } = require('../models/user.models');
require('dotenv').config();
const jwt = require('jsonwebtoken');
async function controllerAuthGoogle(req, res) {
	try {
		if (!req.isAuthenticated()) {
			res.status(200).json({ error: 'user not authenticated' });
		}
		req.session.profile = req.user;
		const user = await storeGoogleUser(req.user);
		if (user?.error) {
			res.redirect(`/login?success=false&message=Authentication failed`);
			return;
		}
		let token = jwt.sign(
			{ _id: user._id, email: user.email },
			process.env.JWT_SECRET,
			{ expiresIn: '2h' }
		);
		res.redirect(`/login?success=true&token=${token}`);
		// res.status(200).json(token);
	} catch (error) {
		res.status(501).redirect();
	}
}
module.exports = { controllerAuthGoogle };
