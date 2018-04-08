const express = require('express');
const serve = require('express-static');

const app = express();

app.use(serve('public'));

app.listen(3000, () => {
    console.log('The Sever has loaded');
})