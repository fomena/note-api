const Router= require ("express");

const { create, getNote, editNote }= require("../controllers/noteController.js");

const noteRouter = Router();

noteRouter.get('/',  getNote);
noteRouter.post('/', create);
noteRouter.patch('/', editNote)


module.exports = noteRouter