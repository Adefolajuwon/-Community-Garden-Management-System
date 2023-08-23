const Task = require('../schemas/task.schema');
async function createTask() {
	try {
		const { title, description } = req.body;
		const task = await Task.create({ title, description });
		res.status(200).json(task);
	} catch (error) {
		console.log(error);
		res.status(200).json(error);
	}
}
async function updateTask() {}
async function getTask() {}
