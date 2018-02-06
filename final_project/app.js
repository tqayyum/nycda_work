const express = require('express');
const logger = require('morgan');
const ex_handlebars = require('express-handlebars');
const favicon = require('serve-favicon');

const app = express();

app.listen(3000, function() {
	console.log('Are you listening');
});

app.get('/', function(req, res) {
	res.send('Does this page load');
});