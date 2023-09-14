const GardenPlot = require('../schemas/garden.schema');
const Redis = require('redis');

const client = Redis.createClient();
async function newGarden(req, res) {
	try {
		// const { userId } = req.params;
		// const theUser = req.user;
		// const manager = req.user._id;
		const { name, location } = req.body;
		const garden = await GardenPlot.create({ name, location });
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

		const totalDocuments = await GardenPlot.countDocuments(); // Count total documents in the collection

		const gardenPlotsQuery = GardenPlot.find({})
			.skip(startIndex)
			.limit(parsedLimit)
			.sort(sort);

		gardenPlotsQuery.populate('manager');

		const gardenPlots = await gardenPlotsQuery.exec(); // Execute the query

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

async function getSpecificGarden(req, res) {
	try {
		const { id } = req.params;
		const garden = await GardenPlot.findById(id).populate('User');
		if (garden) {
			res.status(200).json(garden);
		} else {
			res.status(404).json({ error: 'Could not find garden' }); // Use 404 status
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal server error' }); // Use 500 status
	}
}
async function deleteGarden(req, res) {
	try {
		const { id } = req.params;
		const garden = await GardenPlot.findById(id);
		if (garden) {
			res.json(200).status(garden);
			await GardenPlot.deleteOne(garden);
		} else {
			res.status(404).json({ error: 'Garden not found' });
		}
	} catch (error) {
		res.status(501).json(error);
	}
}
async function updateGarden(req, res) {
	try {
		const { id } = req.params;
		const { location } = req.body;
		const data = {
			location: location,
		};
		const garden = await GardenPlot.findByIdAndUpdate(id, data, { new: true });

		if (!garden) {
			return res.status(404).json({ error: 'Garden not found' });
		}

		res.status(200).json(garden);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal server error' });
	}
}
async function searchGarden(req, res) {
	try {
		const { keyword } = req.query;
		const search = await GardenPlot.findOne(keyword);
	} catch (error) {}
}

module.exports = {
	newGarden,
	allGardens,
	getSpecificGarden,
	deleteGarden,
	updateGarden,
	searchGarden,
};
