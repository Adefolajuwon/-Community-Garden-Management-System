const algorithm = 'aes-256-cbc';
const crypto = require('crypto');
//password = 4466444
//input = book

function encrypt(input, password) {
	try {
		// Hash the password to derive the encryption key
		const passwordHash = crypto
			.createHash('sha256')
			.update(password)
			.digest('hex');

		const iv = crypto.randomBytes(16);

		const cipher = crypto.createCipheriv(
			'aes-256-cbc',
			Buffer.from(passwordHash, 'hex'),
			iv
		);

		let encrypted = cipher.update(input, 'utf8', 'base64');
		encrypted += cipher.final('base64');

		const combinedData = iv.toString('hex') + encrypted;

		return combinedData;
	} catch (error) {
		console.error('Encryption error:', error.message);
		return null;
	}
}
function getKey() {
	// generate a random key
	return (Math.random() + 1).toString(36);
}
module.exports = { encrypt, getKey };
