
const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
app.use(express.static('public'));

// This responds a GET request to the homepage
app.get('/', function(req, res) {
	res.send('This the get method');
});

//This responds a POST request to the homepage
app.post('/', function(req, res) {
	res.send('This is the post method');
});

//This responds a DELETE request for the /del_user page.
app.delete('/del_user', function(req, res) {
	console.log('Got a delete request for /del_user');
	res.send('DELETE User');
});

//This responds a GET request for the /list_user page.
app.get('/list_user', function(req, res) {
	console.log('Got a GET request for /list_user');
	res.send('Listing page')
});

//This responds a GET request for abcd, ab*cd, ab123cd and so on
app.get('/ab*cd', function(req, res) {
	console.log('Got a GET request for /ab*cd');
	res.send('Page Pattern Match');
});



app.listen(8080, function() {
	console.log('Listening on port 8080');
	//console.log('Example app listening at http://%s:%s', host, port);
});