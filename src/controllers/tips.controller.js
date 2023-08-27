const GardenTip = require('../schemas/gardenTip');
async function getTips(req, res) {
	try {
		const countDocument = await GardenTip.countDocuments();
		const randomNumber = Math.floor(Math.random() * countDocument); // Corrected Math.floor usage
		const randomDocument = await GardenTip.findOne()
			.skip(randomNumber)
			.limit(1);
		if (!randomDocument) {
			res.status(404).json({ error: 'Document not found' });
		} else {
			res.status(200).json(randomDocument);
		}
	} catch (error) {
		res.status(500).json(error);
	}
}
async function getAllTips(req, res) {
	try {
		const garden = await GardenTip.find({}).limit(10);
		res.status(200).json(garden);
	} catch (error) {
		res.status(501).json(error);
	}
}
module.exports = { getTips, getAllTips };
