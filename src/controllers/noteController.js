const Joi = require("joi");
const { Note } = require("../models/model.js")

// define the validation schema
const noteValidationSchema = Joi.object().keys({
    userId: Joi.string().required(),
    textNote: Joi.string().required(),

});

// get speciphique note
async function getNote(request, response, next) {
    // fetch aand return all users from the database
    console.log('valeur du paramettre', request.params.id)
    const note = await Note.findOne({ _id: request.params.id });
    return response.status(200).send({ response: note });
}
// get all the note from database
async function getAllNote(request, response) {
    // fetch aand return all users from the database
    const note = await Note.find({}).sort({"createdOn":"-1"});
    return response.status(200).send({ response: note });
}




// the controller for creating new users
async function create(request, response, next) {
    // validate the body of the content
    const validation = noteValidationSchema.validate(request.body);

    // if there is any error return a 400 with the first error message
    if (validation.error) {
        response.status(400).send({ error: validation.error.details[0].message });
        return;
    }
    // else create the note in the database
    const note = await Note.create({
        userId: validation.value.userId,
        textNote: validation.value.textNote

    });
    
    console.log('validation', note)

    // return the created user
    response.setHeader('Access-Control-Allow-Origin', '*');
    response
        .status(201)
        .send({ response:note});
}


async function editNote(request, response) {
    const result = Note.updateOne({ _id: request.body.editId }, { $set: { textNote: request.body.editContent } })

    if (result) {
        return response.status(201)
            .send({ message: 'Note update successfull!' });
    } else {
        response.status(400)
            .send({ message: 'Note is not updated!' });
    }

}

module.exports = { getNote, create, editNote, getAllNote };