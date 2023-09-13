const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	bio: {
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
