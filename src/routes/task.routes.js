const express = require('express');
const { createTask } = require('../controllers/tasks.controller');
const taskRouter = express.Router();
taskRouter.post('/garden-plots/:id/tasks', createTask);
module.exports = { taskRouter };
