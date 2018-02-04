const express = require('express');
const logger = require('morgan');
const exHandlebars = require('exHandlebars');
const app = express();

app.use(express.static('public'));

app.get('/', function(req,res) {
	res.send('Is the image here');
});

app.listen(3000, function() {
	console.log('Are you listening');
});