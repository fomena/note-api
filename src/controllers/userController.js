const Joi= require("joi") ;
const  bcrypt= require ("bcrypt");
const { User } = require ("../models/model.js")

// define the validation schema
const userValidationSchema = Joi.object({
	
	email: Joi.string().email().required(),
	username: Joi.string().min(5).required(),
	password: Joi.string().min(8).required(),
});


async function getUser(request, response) {
    // fetch aand return all users from the database
	
	const user = await User.findOne({_id:request.params.id});
	if (!user) {
		return response.status(400).send({response:"user not exist!"});
		
	}
    return response.status(200).send({response:user});
}

async function userExists( email) {
	// returns true if the username already exists
	const check = await User.find( { email: email})
	
	if (check.length > 0) return true;
	return false;
}




// the controller for creating new users
async function addUserController(request, response) {
	// validate the body of the content
	const validation = userValidationSchema.validate(request.body);

	// if there is any error return a 400 with the first error message
	if (validation.error) {
		response.status(400).send({ error: validation.error.details[0].message });
		return;
	}

	// check if the username or email is already taken
	const userTaken = await userExists(validation.value.username, validation.value.email);
	if (userTaken) {
		return response
			.status(400)
			.send({ message: "Email and/or Username already in use!" });;
	}

	// else create the user
	const password = bcrypt.hashSync(validation.value.password, 10);
	const user = new User({
		
		username: validation.value.username,
		email: validation.value.email,
		password: password,
	});
	const result = await user.save();

	// return the created user
	response
		.status(201)
		.send({ message: `user ${validation.value.username} created!` });
}

module.exports = {addUserController ,getUser};