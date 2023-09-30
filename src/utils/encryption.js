const algorithm = 'aes-256-cbc';
const crypto = require('crypto');
//password = 4466444
//input = book
function encrypt(input, password) {
	try {
		let passwordHash = crypto.createHash('md5');
		passwordHash.update(password);
		let key = passwordHash.digest('hex');

		let passwordKey = crypto.createHash('md5');
		passwordKey.update(password + key);
		let iv = passwordKey.digest('hex');

		let data = Buffer.from(input, 'utf8').toString('binary');

		let cipher = crypto.createCipheriv(algorithm, key, iv.slice(0, 16));
		let encrypted =
			cipher.update(data, 'binary', 'binary') + cipher.final('binary');
		let encoded = Buffer.from(encrypted, 'binary').toString('base64');
		return encoded;
	} catch (error) {
		console.error('Encryption error:', error.message);
		return null; //
	}
}
module.exports = { encrypt };
