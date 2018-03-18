console.log('Are you there!');
//Required files
const fs = require('fs');

//Reading the first file and storing the data in the fData1 variable 
fs.readFile('./pplFiles/people1.json', 'utf8', (err, content) => {
	let fData1 = JSON.parse(content);
	//Reading the second file and storing the data in the fData2 variable 
	fs.readFile('./pplFiles/people2.json', 'utf8', (err, content) => {
	let fData2 = JSON.parse(content);
	//Combining the data to the varibable combo
	const combo = (fData1.sort() + fData2.sort());
		//Writing to the file
		fs.writeFile ('peopleComplete.txt',  combo, (err) => {
			if (err) throw err;
		});
	});
});