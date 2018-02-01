const express = require('express');
const logger = require('morgan');
const request = require('request-promise');
const exphbs = require('express-handlebars');
const favicon = require('serve-favicon');
const path = require('path');
const api_key = require('./api_key')

const app = express();

app.use(logger('dev'));

var baseUrl = {
	url: 'http://datamine.mta.info/mta_esi.php?key=',
}

app.listen(3000, function() {
	console.log('Are you listening');
})

app.get('/',function(req, res) {
	res.send(`${baseUrl} ${api_key} &feed_id1`);
});