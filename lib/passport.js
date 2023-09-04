require('dotenv').config();

const passportInstance = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_AUTH_OPTIONS = {
	clientID: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	callbackURL: 'https://localhost:8000/api/auth/google/callback',
};
passportInstance.use(
	new GoogleStrategy(
		GOOGLE_AUTH_OPTIONS,
		async (accessToken, refreshToken, profile, done) => {
			let data = {
				firstname: profile?._json?.given_name || '',
				email: profile?._json?.email || '',
				provider: 'google',
			};
			done(null, data);
		}
	)
);
