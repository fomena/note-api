const Router= require ("express");

const { addUserController }= require("../controllers/userController.js");

const userRouter = Router();

userRouter.post('/', addUserController);


module.exports = userRouter