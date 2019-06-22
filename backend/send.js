const Handlebars = require('handlebars');
const GmailSend = require('gmail-send')();

function send(options) {
	return new Promise(function(resolve, reject) {
		GmailSend(options, function (err, res) {
			if (err)
				return reject(err);
			resolve(res);
		});
	});
}

module.exports = async function(fastify) {
	fastify.post('/send', {
		schema: {
			body: {
				json: { type: 'string' },
				username: { type: 'string' },
				password: { type: 'string' },
			}
		}
	}, async (request, reply) => {
		let inputData;
		try {
			inputData = JSON.parse(request.body.json);
		}
		catch (err) {
			console.log(err);
			return reply.code(400);
		}

		if (!inputData || !request.body.username || !request.body.password)
			return reply.code(400);

		// console.log(inputData);
		// console.log('login', request.body.username, ':', request.body.password);

		let context = {};
		for (let param of inputData.params) {
			context[param.name] = 'TODO';
		}

		let template = Handlebars.compile(inputData.templateText);
		let rendered = template(context);
		console.log(rendered);

		try {
			let result = await send({
				user: request.body.username,
				pass: request.body.password,
				to: 'test@localhost',
				subject: inputData.subject,
				text: rendered
			});
			console.log('DEBUG', result);
		}
		catch (err) {
			console.log(err);
			return reply.code(400);
		}

		return {
			success: true
		};
	});
};
