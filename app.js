const express = require('express');
const app = express();
const cors = require('cors');
const { userRouter } = require('./src/routes/user.routes');
const { gardenRouter } = require('./src/routes/garden.routes');
const { taskRouter } = require('./src/routes/task.routes');
app.use(express.json());
app.use(
	cors({
		origin: '*',
	})
);
app.use('/api/auth', userRouter);
app.use('/api', gardenRouter);
app.use('/api', taskRouter);

module.exports = app;
