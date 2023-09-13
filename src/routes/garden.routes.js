const express = require('express');
const {
	newGarden,
	allGardens,
	getSpecificGarden,
	deleteGarden,
	updateGarden,
} = require('../controllers/garden.controler');
const { fetchUser } = require('../middlewares/fetchUser.middleware');

const gardenRouter = express.Router();

gardenRouter.post('/garden-plots', fetchUser, newGarden);
gardenRouter.get('/garden-plots', allGardens);
gardenRouter.get('/garden-plots/:id', getSpecificGarden);
gardenRouter.delete('/garden-plots/:id', deleteGarden);
gardenRouter.put('/garden-plots/:id', updateGarden);
// garden.get('/garden-plots/search');

module.exports = { gardenRouter };
