console.log('Are you there!');

const fs = require('fs');
const scrPath1 = ('/Users/tqayyum/nycda_work/peopleMergerApp/people1.json');
const scrPath2 = ('/Users/tqayyum/nycda_work/peopleMergerApp/people2.json');
const readMultipleFiles = require('read-multiple-files');

fs.readFile(scrPath1, (err, data) => {
	if (err) throw err;
	let fileData = JSON.parse(data);
	console.log(fileData);

	fs.writeFile ('peopleComplete.txt',  data, (err) => {
		if (err) throw err;

	});
});