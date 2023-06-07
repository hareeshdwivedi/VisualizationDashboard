const express = require('express');

const router = express.Router();

const Productivity = require('../models/productivity');

router.get('/productivity', async (req, res, next) => {
	const productivity = await Productivity.find().exec();
	res.json(productivity);
});

router.post('/productivity', async (req, res, next) => {
	const prod = new Productivity({
		productivity : req.body.productivity
	});
	console.log(req.body);
	const result = await prod.save();

	res.json(result);
});

module.exports = router;
