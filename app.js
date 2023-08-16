const express = require('express');
const app = express();
const cors = require('cors');
const { userRouter } = require('./src/routes/user.routes');
app.use(express.json());
app.use(
	cors({
		origin: '*',
	})
);
app.use('/api/auth', userRouter);

module.exports = app;
