const algorithm = 'aes-256-cbc';
const crypto = require('crypto');

function encrypt(input, password) {
	let m = crypto.createHash('md5');
	m.update(password);
	let key = m.digest('hex');

	m = crypto.createHash('md5');
	m.update(password + key);
	let iv = m.digest('hex');

	let data = Buffer.from(input, 'utf8').toString('binary');

	let cipher = crypto.createCipheriv(algorithm, key, iv.slice(0, 16));
	let encrypted =
		cipher.update(data, 'binary', 'binary') + cipher.final('binary');
	let encoded = Buffer.from(encrypted, 'binary').toString('base64');
	return encoded;
}
module.exports = { encrypt };
