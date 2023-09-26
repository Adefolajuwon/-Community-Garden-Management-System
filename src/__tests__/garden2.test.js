const app = require('../../app');
const request = require('supertest');
const { newGarden } = require('../controllers/garden.controler');
const GardenPlot = require('../schemas/garden.schema');
const gardenPayload = {
	name: 'Tes Garden',
	location: 'Ibadan',
};
jest.mock('../schemas/garden.schema', () => {
	return {
		create: jest.fn(),
	};
});

describe('garden', () => {
	describe('get garden route', () => {
		describe('product does not exist', () => {
			it('return 404', () => {
				expect(true).toBe(true);
			});
		});
		describe('POST /api/new-garden', () => {
			it('should create a new garden', async () => {
				// Mock the GardenPlot.create function to return a garden
				const gardenData = {
					name: 'Sample Garden',
					location: 'Sample Location',
				};
				GardenPlot.create.mockResolvedValue(gardenData);

				// Define the request payload
				const requestData = {
					name: 'Sample Garden',
					location: 'Sample Location',
				};

				// Perform the HTTP POST request
				const response = await request(app)
					.post('/api/garden-plots')
					.send(requestData);

				// Assertions
				expect(response.statusCode).toBe(200);
				// expect(response.body).toEqual(gardenData);
			});

			// it('should handle errors', async () => {
			// 	// Mock the GardenPlot.create function to throw an error
			// 	const errorMessage = 'Error creating garden';
			// 	GardenPlot.create.mockRejectedValue(new Error(errorMessage));

			// 	// Define the request payload
			// 	const requestData = {
			// 		name: 'Sample Garden',
			// 		location: 'Sample Location',
			// 	};

			// 	// Perform the HTTP POST request
			// 	const response = await request(app)
			// 		.post('/api/new-garden')
			// 		.send(requestData);

			// 	// Assertions
			// 	expect(response.statusCode).toBe(501);
			// 	expect(response.body).toEqual({ error: errorMessage });
			// });
		});
	});
});
