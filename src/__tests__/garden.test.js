const app = require('../../app');
const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');

// const { response } = require('../../../app');

describe('POST /api/gardens', () => {
	it('should create a new garden', async () => {
		// Define the request payload
		const payload = {
			name: 'Test Garden',
			location: 'Test Location',
		};

		const response = await request(app)
			.post('/api/garden-plots')
			// .set(
			// 	'Authorization',
			// 	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTQ2Mjc5MDksImV4cCI6MTY5NTIzMjcwOX0.3dBprQ6mk0-V9oa-GP7n3iHsBacMriXvM9Dr4EFUyuA'
			// ) // Replace with a valid token
			.send(payload);

		// Assertions
		expect(response.status).toBe(200);
		// expect(response.body).toHaveProperty('_id');
		// expect(response.body.name).toBe(payload.name);
		// expect(response.body.location).toBe(payload.location);
	});

	// Add more test cases for error scenarios if needed
});
