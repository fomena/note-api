const mongoose = require("mongoose");

var noteSchema = mongoose.Schema({
	userid:{type:Object, require:true},
	textNote: { type: String, required: true },
	createdOn: { type: Date, default: Date.now },
	lastModified: { type: Date, default: Date.now }


});

module.exports = { noteSchema };