const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
	title: String,
	description: String,
	status: String,
	assignee: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	dueDate: String,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
