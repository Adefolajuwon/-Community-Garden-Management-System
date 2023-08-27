const mongoose = require('mongoose');

// Define the schema
const gardenTipSchema = new mongoose.Schema({
	tip: String,
});

const GardenTip = mongoose.model('gardenTip', gardenTipSchema);

module.exports = GardenTip;
