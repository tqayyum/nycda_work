console.log('Starting notes.js');

var addNote = (title, body) => {
	console.log('Adding note', title, body);
};

var getAll = (title, body) => {
	console.log('Getting all notes');
}

var getNote = (title) => {
	console.log('Reading a note', title); 
}

var removeNote = (title) => {
	console.log('Removing Note', title);
}

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};