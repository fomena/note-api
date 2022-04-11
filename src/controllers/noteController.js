const Joi = require("joi");
const { Note } = require("../models/model.js")

// define the validation schema
const noteValidationSchema = Joi.object().keys({

    textNote: Joi.string().required(),

});


async function getNote(request, response) {
    // fetch aand return all users from the database

    const note = await Note.findOne({ _id: request.body.id });
    return note;
}




// the controller for creating new users
async function create(request, response) {
    // validate the body of the content
    const validation = noteValidationSchema.validate(request.body);

    // if there is any error return a 400 with the first error message
    if (validation.error) {
        response.status(400).send({ error: validation.error.details[0].message });
        return;
    }



    // else create the note in the database

    const note  =  await Note.create({textNote: validation.value.textNote,function (err, note) {if (err) return handleError(err);}});
    // const result = await note.save();
    console.log('validation' ,note)

    // return the created user
    response
        .status(201)
        .send({ message: 'Note created!' });
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

module.exports = { getNote, create, editNote };