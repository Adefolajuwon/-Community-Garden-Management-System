const express = require('express');
const { getTips, getAllTips } = require('../controllers/tips.controller');
const tipRouter = express.Router();
tipRouter.get('/tips', getTips);
tipRouter.get('/all-tips', getAllTips);

module.exports = { tipRouter };
