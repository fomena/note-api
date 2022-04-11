const mongoose= require("mongoose");

const userSchema = mongoose.Schema({
	
	password: { type: String, required: true },
	email: { type: String, unique: true, required: true },
	username: { type: String, unique: false, required: true},
	createdOn: { type: Date, default: Date.now },
	lastModified: { type: Date, default: Date.now },
	lastLogin: { type: Date, default: Date.now },
});

module.exports = {userSchema};