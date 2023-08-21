const express = require('express');
const {
	newGarden,
	allGardens,
	getSpecificGarden,
	deleteGarden,
} = require('../controllers/garden.controler');
const gardenRouter = express.Router();

gardenRouter.post('/garden-plots', newGarden);
gardenRouter.get('/garden-plots/:id', getSpecificGarden);
gardenRouter.delete('/garden-plots/:id', deleteGarden);

module.exports = { gardenRouter };
