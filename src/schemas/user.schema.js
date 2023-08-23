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
	bio: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: false,
	},
	gardens: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'GardenPlot',
		},
	],
});

module.exports = mongoose.model('User', userSchema);
