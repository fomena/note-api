const Router= require ("express");

const { create, getNote, editNote ,getAllNote}= require("../controllers/noteController.js");

const noteRouter = Router();

noteRouter.get('/:id',  getNote);
noteRouter.get('/',  getAllNote);
noteRouter.post('/', create);
noteRouter.patch('/', editNote)


module.exports = noteRouter