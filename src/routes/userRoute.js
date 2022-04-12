const Router= require ("express");

const { getUser, addUserController }= require("../controllers/userController.js");

const userRouter = Router();

userRouter.get('/:id',  getUser);
userRouter.post('/', addUserController);


module.exports = userRouter