const express = require('express');
const app = express();
const cors = require('cors');
const { userRouter } = require('./src/routes/user.routes');
const { gardenRouter } = require('./src/routes/garden.routes');
app.use(express.json());
app.use(
	cors({
		origin: '*',
	})
);
app.use('/api/auth', userRouter);
app.use('/api', gardenRouter);

module.exports = app;
