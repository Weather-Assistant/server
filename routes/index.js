const router = require('express').Router();

const calendarificRouter = require('./calendarific');

router.use('/calendarific', calendarificRouter)

module.exports = router