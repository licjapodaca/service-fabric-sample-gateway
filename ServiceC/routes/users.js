var faker = require("faker");

var appRouter = function (app) {

	app.get("/", function (req, res) {
		res.status(200).send({ message: 'Welcome to our restful API' });
	});

	app.get("/user", function (req, res) {
		var data = ({
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			username: faker.internet.userName(),
			email: faker.internet.email()
		});
		res.status(200).send({ datos: data, servidor: "" });
	});

	app.get("/users/:num", function (req, res) {
		var users = [];
		var num = req.params.num;

		if (isFinite(num) && num > 0) {
			for (i = 0; i <= num - 1; i++) {
				users.push({
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					username: faker.internet.userName(),
					email: faker.internet.email()
				});
			}

			res.status(200).send({ datos: users, servidor: "" });

		} else {
			res.status(400).send({ message: 'invalid number supplied' });
		}

	});
}

module.exports = appRouter;