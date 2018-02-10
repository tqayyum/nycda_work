console.log('Starting App');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');


console.log(_.isString(true));
console.log(_.isString('Tom'));

var filteredArray = _.uniq(['Tim', 1 , 'tom', 1, 2, 3, 4]);

console.log(filteredArray);
//console.log('Result:', notes.addNote(9, -2));
//var res = notes.addNote();
//console.log(res);
//var user = os.userInfo();


//fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);