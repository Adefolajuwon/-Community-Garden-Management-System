const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: {
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
	tasksAssigned: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Task',
		},
	],
});

module.exports = mongoose.model('User', userSchema);
