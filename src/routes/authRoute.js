const Router= require ("express");

const { getUser}= require("../controllers/authController.js");
authRouter= Router()
authRouter.post('/',  getUser);

module.exports=authRouter