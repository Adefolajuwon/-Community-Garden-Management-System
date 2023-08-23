const mongoose = require('mongoose');

const gardenPlotSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	location: {
		type: String,
		required: true,
		trim: true,
	},
	manager: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
});

const GardenPlot = mongoose.model('GardenPlot', gardenPlotSchema);

module.exports = GardenPlot;
