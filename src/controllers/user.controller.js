const { validateEmail } = require('../helper/emailValidation');
const User = require('../schemas/user.schema');

async function createUser(req, res) {
	try {
		const { username, email, bio, password } = req.body;

		const verifiedUsername = await User.findOne({ username });
		if (verifiedUsername) {
			res.status(505).json({ error: 'Username taken' });
		}
		const user = await User.create({
			username,
			email,
			bio,
			password,
		});

		// Send a response back to the client with the created user data
		res.status(201).json(user);
	} catch (error) {
		console.error(error);
		res
			.status(500)
			.json({ message: 'An error occurred while creating the user.' });
	}
}
async function getSpecificUser(req, res) {
	try {
		const { firstname } = req.params;

		const user = await User.findOne({ firstname: firstname }); // Pass an object here
		console.log(user);
		if (user) {
			res.status(200).json({ user: user });
		} else {
			// User not found, send a 404 error response
			res.status(404).json({ error: 'User not found' });
		}
	} catch (error) {
		console.error('Error fetching user:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}
async function tasks(req, res) {
	try {
	} catch (error) {}
}

module.exports = {
	controllerAuthGoogle,
	controllerInsertUser,
	controllerVerifyUserCredentials,
	controllerFetchLoggedInUser,
	sendEmail,
	createUser,
	getSpecificUser,
};
