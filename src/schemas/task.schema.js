const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
	title: String,
	description: String,

	status: {
		type: String,
		default: 'pending',
	},

	assignee: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	dueDate: { type: Date, default: Date.now },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
