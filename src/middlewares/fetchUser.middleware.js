require('dotenv').config();
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

// const fetchUser = async (req, res, next) => {
// 	let auth = req.headers.authorization;
// 	if (!auth || !auth.startsWith('Bearer ')) {
// 		res.status(401).json({ error: 'User not authenticated' });
// 		return;
// 	}
// 	auth = auth.split('');
// 	const token = auth[1];
// 	try {
// 		const payload = jwt.verify(token, JWT_SECRET);
// 		req.user = payload;
// 		next();
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).send({ error: 'Internal Server Error' });
// 	}
// };
const fetchUser = async (req, res, next) => {
	let auth = req.headers.authorization;
	if (!auth || !auth.startsWith('Bearer ')) {
		return res.status(401).json({ error: 'User not authenticated' });
	}

	const token = auth.split(' ')[1]; // Extract the token

	try {
		const payload = jwt.verify(token, JWT_SECRET);
		req.user = payload;
		console.log(payload);
		next();
	} catch (error) {
		console.error(error);
		return res.status(401).json({ error: 'Invalid token' });
	}
};

module.exports = fetchUser;

module.exports = { fetchUser };
