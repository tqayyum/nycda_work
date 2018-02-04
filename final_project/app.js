const express = require('express');
const logger = require('morgan');
const ex_handlebars = require('express-handlebars');
const favicon = require('serve-favicon');
const apiUrl = 'http://www.cbsnews.com/api/v1/gallery/nasas-real-life-gravity-pics/';

const app = express();

app.listen(3000, function() {
	console.log('Are you listening');
});

app.get('/', function(req, res) {
	res.send('Does this page load');
});