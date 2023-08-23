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
	timestamp: {
		type: Data,
		default: Date.now,
	},
});

const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = Announcement;
