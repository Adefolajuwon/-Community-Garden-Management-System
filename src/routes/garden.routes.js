const express = require('express');
const {
	newGarden,
	allGardens,
	getSpecificGarden,
	deleteGarden,
	updateGarden,
} = require('../controllers/garden.controler');
const gardenRouter = express.Router();

gardenRouter.post('/garden-plots', newGarden);
gardenRouter.get('/garden-plots', allGardens);
gardenRouter.get('/garden-plots/:id', getSpecificGarden);
gardenRouter.delete('/garden-plots/:id', deleteGarden);
gardenRouter.put('/garden-plots/:id', updateGarden);

module.exports = { gardenRouter };
