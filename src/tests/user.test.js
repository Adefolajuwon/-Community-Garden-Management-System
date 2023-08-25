const app = require('../../app'); // Import your Express app
const request = require('supertest');
const User = require('../schemas/user.schema'); // Assuming your User model is in User.js
const { response } = require('../../app');

// describe('POST /api/users', () => {
// 	// beforeAll(async () => {
// 	// 	// Connect to a test database or set up a mock database
// 	// });

// 	// afterAll(async () => {
// 	// 	// Close the database connection or clean up after tests
// 	// });

// 	it('should create a new user', async () => {
// 		const newUser = {
// 			username: 'testuser',
// 			email: 'test@example.com',
// 			bio: 'Test bio',
// 			password: 'testpassword',
// 		};

// 		const response = await request(app)
// 			.post('/api/users')
// 			.send(newUser)
// 			.expect(201);

// 		// Assertions to check the response
// 		expect(response.body.username).toBe(newUser.username);
// 		expect(response.body.email).toBe(newUser.email);
// 		expect(response.body.bio).toBe(newUser.bio);
// 		// You can add more assertions here based on your schema and response format
// 	});

// 	it('should return an error if username is taken', async () => {
// 		const existingUser = {
// 			username: 'existinguser',
// 			email: 'existing@example.com',
// 			bio: 'Existing user bio',
// 			password: 'existingpassword',
// 		};

// 		// Create the existing user before running the test
// 		await User.create(existingUser);

// 		const newUserWithTakenUsername = {
// 			username: existingUser.username, // Use the existing username
// 			email: 'new@example.com',
// 			bio: 'New user bio',
// 			password: 'newpassword',
// 		};

// 		const response = await request(app)
// 			.post('/api/users')
// 			.send(newUserWithTakenUsername)
// 			.expect(505); // Expected status code for username taken error

// 		// Assertions to check the error response
// 		expect(response.body.error).toBe('Username taken');
// 	});
// });
// it('GET /user/id --> specific user', () => {
// 	return (
// 		request(app)
// 			.get('/user/:tremo')
// 			// .expect('Content-Type', /json/)
// 			.expect(200)
// 			.then((response) => {
// 				expect(response.body).toEqual(
// 					expect.objectContaining({
// 						username: expect.any(String),
// 						email: expect.any(String),
// 						bio: expect.any(String),
// 					})
// 				);
// 			})
// 	);
// });
// // it('GET /user/id--> 404 ', () => {});
it('POST /register --> new user', async () => {
	const response = await request(app)
		.post('/api/auth/register')
		.send({
			username: 'travis',
			email: 'oadefolajuwon@gmail.com',
			bio: 'food is greeat',
		})
		.expect(201);
	expect(response.body).toEqual(
		expect.objectContaining({
			username: 'travis',
			email: 'oadefolajuwon@gmail.com',
			bio: 'food is greeat',
		})
	);
});
