const Task = require('../schemas/task.schema');
async function createTask() {
	try {
		const { title, description, assignee } = req.body;
		const task = await (
			await Task.create({ title, description, assignee })
		).populate('assignee');
		res.status(200).json(task);
	} catch (error) {
		console.log(error);
		res.status(200).json(error);
	}
}
async function updateTask() {}
async function getTask() {}
module.exports = { createTask };
