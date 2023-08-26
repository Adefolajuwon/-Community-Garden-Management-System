const express = require('express');
const {
	createTask,
	getTasks,
	deleteTask,
} = require('../controllers/tasks.controller');
const taskRouter = express.Router();
taskRouter.post('/garden-plots/:plotId/task', createTask);
taskRouter.get('/garden-plots/:plotId/task', getTasks);
taskRouter.delete('/garden-plots/:plotId/task/taskId', deleteTask);

module.exports = { taskRouter };
