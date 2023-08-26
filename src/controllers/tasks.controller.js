const Task = require('../schemas/task.schema');
const GardenPlot = require('../schemas/garden.schema');
async function createTask(req, res) {
	try {
		const { gardenId } = req.params;
		const { title, description, assignee } = req.body;
		const task = await Task.create({ title, description, assignee });
		await task.populate('assignee', 'firstname');
		const garden = await GardenPlot.findById(gardenId);
		garden.tasks.push(task._id);
		await garden.save();
		res.status(200).json(task);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

async function updateTask() {}
async function getTasks(req, res) {
	try {
		const { gardenId } = req.params;
		const garden = await GardenPlot.findById(gardenId).populate('tasks');
		if (!garden) {
			return res.status(404).json({ error: 'Garden not found' });
		}

		const tasks = garden.tasks;

		if (!tasks || tasks.length === 0) {
			return res.status(404).json({ error: 'Tasks not found' });
		}
		res.status(200).json(tasks);
	} catch (error) {
		console.error('Error fetching tasks:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}
async function deleteTask(req, res) {
	try {
		const { gardenId } = req.params;
		const { taskId } = req.params;
		const garden = await GardenPlot.findById(gardenId);
		if (!garden) {
			res.status(404).json({ error: 'Garden not found' });
		}
		const tasks = garden.tasks;
		const deleteTask = tasks.findOneByIdAndDelete(taskId);
		res.status(200).json(deleteTask);
	} catch (error) {
		res.status(501).json(error);
	}
}
module.exports = { createTask, getTasks, deleteTask };
