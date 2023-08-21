const express = require('express');
const {
	newGarden,
	allGardens,
	getSpecificGarden,
} = require('../controllers/garden.controler');
const gardenRouter = express.Router();

gardenRouter.post('/garden-plots', newGarden);
gardenRouter.get('/garden-plots/:id', getSpecificGarden);
module.exports = { gardenRouter };
