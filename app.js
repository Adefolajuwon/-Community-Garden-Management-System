const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const authRouter = require('./routes/auth.route');
const errorMiddleware = require('./middlewares/error.middleware');

app.use(express.json());
app.use(
	cors({
		origin: '*',
	})
);

module.exports = app;
