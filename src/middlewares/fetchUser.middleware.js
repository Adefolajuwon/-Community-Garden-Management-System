require('dotenv').config();
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const fetchUser = async (req, res, next) => {
	let auth = req.headers.authorization;
	if (!auth || !auth.startsWith('Bearer ')) {
		res.status(401).json({ error: 'User not authenticated' });
		return;
	}
	auth = auth.split('');
	const token = auth[1];
	try {
		const payload = jwt.verify(token, JWT_SECRET);
		req.user = payload;
		next();
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: 'Internal Server Error' });
	}
};
module.exports = { fetchUser };
