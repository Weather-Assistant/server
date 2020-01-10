const userRouter = require('express').Router();
const { UserController } = require('../controllers/');

userRouter.post('/', UserController.signIn);

module.exports = userRouter;
