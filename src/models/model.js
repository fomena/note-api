const mongoose =require ("mongoose");

const {userSchema}= require ('../schemas/user.js');
const {noteSchema}= require ('../schemas/note.js');


const User = mongoose.model("users", userSchema);
const Note = mongoose.model("notes", noteSchema);

module.exports=   {User, Note} ;