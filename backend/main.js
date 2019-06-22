const package = require('../package.json');
const fastify = require('fastify')({
	logger: true
});

fastify.get('/', async (request, reply) => {
	return {
		version: package.version,
		message: `Welcome to ${package.name}@${package.version} API`
	};
});

fastify.register(require('./send'));

const start = async () => {
	try {
		await fastify.listen(3000, '0.0.0.0');
		fastify.log.info(`server listening on ${fastify.server.address().port}`);
	}
	catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
}

start();
