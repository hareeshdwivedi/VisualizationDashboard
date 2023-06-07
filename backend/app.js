const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes/routes.js');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

	next();
});

app.use('/api', routes);

app.get('/', (req, res, next) => {
	res.send('hello');
});

mongoose
	.connect(
		`mongodb+srv://${process.env.DB_USER}:${process.env
			.DB_PASSWORD}@cluster0-yd4h5.mongodb.net/test?retryWrites=true&w=majority`,
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => {
		app.listen(process.env.PORT || 5000, () =>
			console.log('Database connected')
		);
	})
	.catch(err => {
		console.log(err);
	});
