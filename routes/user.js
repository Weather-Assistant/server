const userRouter = require('express').Router();
const { UserController } = require('../controllers/');

userRouter.post('/sign-in', UserController.signIn);

module.exports = userRouter;
