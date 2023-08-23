const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
	title: String,
	description: String,
	status: {
		status: String,
		default: 'pending',
	},
	assignee: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	dueDate: String,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
