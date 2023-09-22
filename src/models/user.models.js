// const userSchema = require('../schemas/user.schema');
const User = require('../schemas/user.schema');

async function storeGoogleUser(user) {
	try {
		const { email, provider } = user;

		let response = await User.findOne({ email });
		if (!response) {
			response = await User.create(user);
		} else {
			response = await User.updateOne({ email }, user);
		}
		return response;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

async function insertNewUser(user) {
	try {
		let { email } = user;
		// Check if the user already exists
		let response = await userSchema.findOne({ email });
		if (response) {
			return { error: 'User already exists' };
		}

		response = await userSchema.create(user);
		return response;
	} catch (e) {
		return { error: 'An error occurred' };
	}
}

async function fetchUserByEmail(email) {
	try {
		let response = await userSchema.findOne({ email }, { __v: 0 });
		return response;
	} catch (e) {
		return { error: 'An error occurred' };
	}
}

module.exports = { storeGoogleUser, insertNewUser, fetchUserByEmail };
