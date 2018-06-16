'use strict';
var express = require('express');
var bodyParser = require('body-parser');

var users = require('./routes/users');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

users(app);

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
	console.info('Express server listening on port ', server.address().port);
});
