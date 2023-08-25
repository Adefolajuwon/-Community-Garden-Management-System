const express = require('express');
const { createTask, getTasks } = require('../controllers/tasks.controller');
const taskRouter = express.Router();
taskRouter.post('/garden-plots/:id/task', createTask);
taskRouter.get('/garden-plots/:id/task', getTasks);

module.exports = { taskRouter };
