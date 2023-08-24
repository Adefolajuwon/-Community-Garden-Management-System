const Task = require('../schemas/task.schema');
async function createTask(req, res) {
	try {
		const { title, description, assignee } = req.body;
		const task = await Task.create({ title, description, assignee });

		// Populate the 'assignee' field and select the 'firstname' field
		await task.populate('assignee', 'firstname');

		res.status(200).json(task);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

async function updateTask() {}
async function getTasks() {
	try {
		const tasks = await Task.find({});
		if (tasks) {
			res.status(200).json(tasks);
		}
		res.status(404).json({ error: 'Tasks not found' });
	} catch (error) {
		res.status(404).json(error);
	}
}
module.exports = { createTask, getTasks };
