var express = require('express');
var router = express.Router();
const Tag = require('../models/index').tag;

/*router.get('/', (req, res, next) => {
	res.send('Is the tag route working');
});*/

router.get('/', (req, res, next) => {
	Tag.findAll()
		.then((tags) => {
			res.send(tags);
		});
});

router.get('/:id', (req, res, next) => {
	Tag.findById(req.parmas.id)
		.then((tag) => {
			res.send(tag);
		});
});

router.post('/', (req, res, next) => {
	const parmas = {
		image_id: req.body.image_id,
		tag_name: req.body.tag_name
	};

	Tag.create(parmas)
		.then((tags) => {
			res.send(tags);
		});
});

module.exports = router;