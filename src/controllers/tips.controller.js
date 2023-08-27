const GardenTip = require('../schemas/gardenTip');
async function getTips(req, res) {
	try {
		const countDocument = await GardenTip.countDocuments();
		const randomNumber = Math.floor(Math.random * countDocument);
		const randomDocument = await GardenTip.findOne()
			.skip(randomNumber)
			.limit(1);
		if (!randomDocument) {
			res.status(404).json({ error: 'Document not found' });
		}
		res.json(200).json(randomDocument);
	} catch (error) {
		res.status(200).json(error);
	}
}
module.exports = { getTips };
