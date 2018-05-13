var express = require('express');
var router = express.Router();
const Image = require('../models/index').image;

/*router.get('/', (req, res, next) => {
	res.send('Working on the images routes');
});*/

router.get('/', (req, res, next) => {
	Image.findAll()
		.then((images) => {
			res.send(images);
		});
});

router.get('/:id', (req, res, next) => {
	Image.findById(req.params.id)
		.then((image) => {
			res.send(image);
		});
});

router.post('/', (req, res, next) => {
	const params = {
		src: req.body.src,
		tag_id: req.body.tag_id,
		user_id: req.body.user_id
	};

	Image.create(params)
		.then((images) => {
			res.send(images);
		});
});

module.exports = router;