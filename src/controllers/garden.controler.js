const Gardenplot = require('../schemas/garden.schema');

async function newGarden(req, res) {
	try {
		const { name, location } = req.body;
		const garden = await Gardenplot.create({ name, location });
		if (garden) {
			res.status(200).json(garden);
		} else {
			res.status(501).json({
				error: 'An error occurred while trying to create a new garden.',
			});
		}
	} catch (error) {
		console.log(error);
		res.status(501).json(error);
	}
}
async function allGardens() {
	try {
	} catch (error) {}
}
