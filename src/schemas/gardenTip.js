const mongoose = require('mongoose');

// Define the schema
const gardenTipSchema = new mongoose.Schema({
	tip: String,
});

// Create the model
const GardenTip = mongoose.model('gardenTip', gardenTipSchema);

module.exports = GardenTip;
