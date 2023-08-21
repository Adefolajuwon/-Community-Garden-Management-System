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
async function allGardens(req, res) {
	try {
		const { page, limit, sort } = req.query;
		const parsedLimit = parseInt(limit);
		const parsedPage = parseInt(page);
		const startIndex = (parsedPage - 1) * parsedLimit;
		const endIndex = parsedLimit * parsedPage;

		const totalDocuments = await Gardenplot.countDocuments(); // Count total documents in the collection

		const gardenPlots = await Gardenplot.find({})
			.skip(startIndex)
			.limit(parsedLimit)
			.sort(sort);

		const response = {
			pagination: {
				currentPage: parsedPage,
				perPage: parsedLimit,
				totalPages: Math.ceil(totalDocuments / parsedLimit),
				totalDocuments: totalDocuments,
			},
			gardenPlots: gardenPlots,
		};

		res.status(200).json(response);
	} catch (error) {
		console.error('Error fetching garden plots:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}
module.exports = { newGarden, allGardens };
