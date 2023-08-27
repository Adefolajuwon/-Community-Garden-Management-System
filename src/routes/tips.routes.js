const express = require('express');
const { getTips } = require('../controllers/tips.controller');
const tipRouter = express.Router();
tipRouter.get('/tips', getTips);
module.exports = { tipRouter };
