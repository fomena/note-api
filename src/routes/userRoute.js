const Router= require ("express");

const { getUsersController, addUserController }= require("../controllers/userController.js");

const userRouter = Router();

userRouter.get('/',  getUsersController);
userRouter.post('/', addUserController);


module.exports = userRouter