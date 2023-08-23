const mongoose = require('mongoose');
const managerSchema = new mongooose.Schema({
	gardens: {
		type: mongooose.Schema.Types.ObjectId,
		ref: 'GardenPlot',
	},
});
