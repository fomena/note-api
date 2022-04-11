const mongoose = require("mongoose");

var noteSchema = mongoose.Schema({

	textNote: { type: String, required: true }


});

module.exports = { noteSchema };