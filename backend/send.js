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

		let template = Handlebars.compile(inputData.templateHTML);
		let sent = [];
		let failed = [];

		for (let email of inputData.emails) {
			let context = {};
			for (let param of email.params) {
				context[param.name] = param.value;
			}
			let rendered = template(context);

			try {
				let result = await send({
					user: request.body.username,
					pass: request.body.password,
					to: email.email,
					subject: inputData.subject,
					html: rendered
				});
				sent.push(email.email);
			}
			catch (err) {
				console.log(err);
				failed.push(email.email);
			}
		}

		return {
			success: true,
			sent,
			failed,
		};
	});
};
