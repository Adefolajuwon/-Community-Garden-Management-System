const Task = require('../schemas/task.schema');
const GardenPlot = require('../schemas/garden.schema');
async function createTask(req, res) {
	try {
		const { gardenId } = req.params;
		const { title, description, assignee } = req.body;
		const task = await Task.create({ title, description, assignee });
		// await task.populate('assignee', 'firstname');
		const garden = await GardenPlot.findById(gardenId);
		garden.tasks.push(task._id);
		await garden.save();
		res.status(200).json(task);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

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
		const { gardenId, taskId } = req.params;
		const garden = await GardenPlot.findById(gardenId);
		if (!garden) {
			return res.status(404).json({ error: 'Garden not found' });
		}
		const tasks = garden.tasks;
		const deletedTaskIndex = tasks.findIndex(
			(task) => task.toString() === taskId
		);
		if (deletedTaskIndex === -1) {
			return res.status(404).json({ error: 'Task not found in the garden' });
		}
		tasks.splice(deletedTaskIndex, 1);
		await garden.save();
		const deletedTask = await Task.findByIdAndDelete(taskId);
		res.status(200).json(deletedTask);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal server error' });
	}
}
async function updateTask(req, res) {
	try {
		const { gardenId, taskId, assignee, dueDate } = req.params;
		const { title, description } = req.body;

		const garden = await GardenPlot.findById(gardenId);
		if (!garden) {
			return res.status(404).json({ error: 'Garden not found' });
		}

		const tasks = garden.tasks;
		const editTaskIndex = tasks.findIndex((task) => task.toString() === taskId);
		if (editTaskIndex === -1) {
			return res.status(404).json({ error: 'Task not found in the garden' });
		}

		const updatedTask = await Task.findByIdAndUpdate(
			taskId,
			{ title, description, assignee, dueDate },
			{ new: true }
		);
		await garden.save();

		res.status(200).json(updatedTask);
	} catch (error) {
		res.status(501).json(error);
	}
}
async function completedTask(req, res) {
	try {
		const { taskId } = req.params;
		const data = {
			status: 'completed',
		};
		const task = await Task.findByIdAndUpdate(taskId, data, { new: true });
		return res.status(200).json(task);
	} catch (error) {
		res.status(200).json(error);
	}
}
async function unCompletedTask(req, res) {
	try {
		const { gardenId } = req.params;
		const garden = await GardenPlot.findById(gardenId).populate('tasks');
		if (!garden) {
			res.status(404).json({ error: 'Garden not found' });
		}

		res.status(200).json(garden);
		const task = garden.tasks;
	} catch (error) {
		res.status(501).json(error);
	}
}
module.exports = {
	createTask,
	getTasks,
	deleteTask,
	updateTask,
	completedTask,
	unCompletedTask,
};
