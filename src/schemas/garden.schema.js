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

	discussions: [
		{
			title: {
				type: String,
				required: true,
				trim: true,
			},
			content: {
				type: String,
				required: true,
			},
			author: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
				required: true,
			},
			timestamp: {
				type: Date,
				default: Date.now,
			},
		},
	],
});

const GardenPlot = mongoose.model('GardenPlot', gardenPlotSchema);

module.exports = GardenPlot;
