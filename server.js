const http = require('http');
const app = require('./app');

const { startMongoose } = require('./lib/mongoose');

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

(async function () {
	await startMongoose();
	server.listen(PORT, () => {
		console.log(`Server started on PORT ${PORT}...`);
	});
})();
