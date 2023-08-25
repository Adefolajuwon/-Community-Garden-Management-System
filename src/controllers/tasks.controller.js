const Task = require('../schemas/task.schema');
const GardenPlot = require('../schemas/garden.schema');
async function createTask(req, res) {
	try {
		const { id } = req.params;
		const { title, description, assignee } = req.body;
		const task = await Task.create({ title, description, assignee });
		await task.populate('assignee', 'firstname');
		const garden = await GardenPlot.findById(id);
		garden.tasks.push(id);
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
		const { id } = req.params;
		const garden = await GardenPlot.findById(id).populate('tasks');

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

module.exports = { createTask, getTasks };
