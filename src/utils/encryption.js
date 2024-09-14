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
		g;
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
function decrypt(input, password) {
	input = input.replace(/\-/g, '+').replace(/_/g, '/');
	let edata = Buffer.from(input, 'base64').toString('binary');

	let m = crypto.createHash('md5');
	m.update(password);
	let key = m.digest('hex');

	m = crypto.createHash('md5');
	m.update(password + key);
	let iv = m.digest('hex');

	let decipher = crypto.createDecipheriv(algorithm, key, iv.slice(0, 16));
	let decrypted =
		decipher.update(edata, 'binary', 'binary') + decipher.final('binary');
	let plaintext = Buffer.from(decrypted, 'binary').toString('utf8');

	return plaintext;
}

module.exports = { encrypt, getKey, decrypt };
