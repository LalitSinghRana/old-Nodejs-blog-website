const { Router } = require('express');
const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
	try {
		res.render('articles/new');
	} catch (err) {
		console.log(err);
	}
});

// router.post('/', (req,res)=> {

// })

module.exports = router;
