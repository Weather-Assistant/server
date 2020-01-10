const router = require('express').Router();

const calendarificRouter = require('./calendarific');
const userRouter = require('./user');

router.use('/calendarific', calendarificRouter);

router.post('/sign-in', userRouter);

module.exports = router;
