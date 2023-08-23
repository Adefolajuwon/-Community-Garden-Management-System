const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
	title: String,
	description: String,
	status: String,
	assignee: String,
	dueDate: String,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
