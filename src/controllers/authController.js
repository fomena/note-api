const  bcrypt= require ("bcrypt");
const { User } = require ("../models/model.js")



async function getUser(request, response) {
    // fetch aand return all users from the database
	
	const user = await User.findOne({email:request.body.email});
	if (!user) {
		return response.status(400).send({response:false});
		
	}

    return response.status(200).send({response:user});
}
module.exports= {getUser}