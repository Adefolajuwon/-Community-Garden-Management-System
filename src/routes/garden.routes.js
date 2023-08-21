const express = require('express');
const { newGarden } = require('../controllers/garden.controler');
const gardenRouter = express.Router();
gardenRouter.post('/garden-plots', newGarden);
module.exports = { gardenRouter };
