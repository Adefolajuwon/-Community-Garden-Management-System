const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User', // Reference to the user who authored the announcement
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	gardenPlot: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'GardenPlot', // Reference to the garden plot associated with the announcement
		required: true,
	},
});

const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = Announcement;
