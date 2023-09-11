const express = require('express');
const app = express();
const cors = require('cors');
const { userRouter } = require('./src/routes/user.routes');
const { gardenRouter } = require('./src/routes/garden.routes');
const { taskRouter } = require('./src/routes/task.routes');
const { tipRouter } = require('./src/routes/tips.routes');
const authRouter = require('./src/routes/auth.routes');

app.use((req, res, next) => {
	res.setHeader('Content-Type', 'application/json');
	next();
});

app.use(express.json());
app.use(
	cors({
		origin: '*',
	})
);
app.use('/setauthtoken', (req, res) => {
	res.send('welcome');
});
app.use('/api/auth', userRouter);
app.use('/api', gardenRouter);
app.use('/api', taskRouter);
app.use('/api', tipRouter);
app.use('/api/auth', authRouter);

module.exports = app;
