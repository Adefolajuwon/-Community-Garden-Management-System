const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	// provider: {
	// 	type: String,
	// 	required: true,
	// },
	password: {
		type: String,
		required: false,
	},
	stories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Story' }],
});

module.exports = mongoose.model('User', userSchema);
