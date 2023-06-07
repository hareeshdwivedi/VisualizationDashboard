const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productivitySchema = new Schema({
	productivity : { type: Number, required: true }
});

module.exports = mongoose.model('Productivity', productivitySchema);
