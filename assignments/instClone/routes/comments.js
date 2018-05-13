var express = require('express');
var router = express.Router();
const Comment = require('../models/index').comment;

/*router.get('/', (req, res, next) => {
	res.send('Working on the comments routes');
});*/

//Get All Cooments
router.get('/', (req, res, next) => {
	Comment.findAll()
		.then((comments) => {
			res.send(comments);
		});
});

router.get('/:id', (req, res, next) => {
	Comment.findById(req.params.id)
		.then((comment) => {
			res.send(comment);	
		});
});

//Creating a new comment
router.post('/', (req,res,next) => {
	const params = {
		comment_body: req.body.comment_body,
		image_id: req.body.image_id,
		user_id: req.body.user_id
	};

	Comment.create(params)
		.then((comments) => {
			res.send(comments);
		});
});

module.exports = router;