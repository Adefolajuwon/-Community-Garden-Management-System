const app = require('../../app');
const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');

// const { response } = require('../../../app');
const { GardenPlot } = require('../schemas/garden.schema');
describe('POST /api/gardens', () => {
	it('should create a new garden', async () => {
		const user = {
			_id: '65016a94fb7f218e8b4fb584',
		};

		const requestBody = {
			name: 'Test Garden',
			location: 'Test Location',
		};

		const response = await request(app)
			.post('/api/garden-plots')
			.set(
				'Authorization',
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTQ2MDc2MzksImV4cCI6MTY5NTIxMjQzOX0.uPm9VOtGxgHu8Af8YNd7SFIwVb_hcjiyBoOcTnfh9dM'
			) // Replace with a valid JWT token
			.send(requestBody);

		// Assertions
		expect(response.status).toBe(501);
		expect(response.body).toMatchObject({
			_id: '650176aba7436288ad7810d0',
			name: requestBody.name,
			location: requestBody.location,
			manager: user._id,
		});

		// Ensure that the GardenPlot.create method was called with the correct arguments
		expect(createSpy).toHaveBeenCalledWith({
			name: requestBody.name,
			location: requestBody.location,
			manager: user._id,
		});
	});
});
