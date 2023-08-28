const express = require('express');
const {
	createTask,
	getTasks,
	deleteTask,
	updateTask,
	completedTask,
} = require('../controllers/tasks.controller');
const taskRouter = express.Router();
taskRouter.post('/garden-plots/:gardenId/task', createTask);
taskRouter.get('/garden-plots/:gardenId/task', getTasks);
taskRouter.delete('/garden-plots/:gardenId/task/:taskId', deleteTask);
taskRouter.put('/garden-plots/:gardenId/task/:taskId', updateTask);
taskRouter.put('/task/:taskId', completedTask);

module.exports = { taskRouter };
