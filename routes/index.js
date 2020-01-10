const router = require('express').Router();

const pixabay = require('../controllers/pixabayController')
const calendarificRouter = require('./calendarific');

router.use('/calendarific', calendarificRouter)
router.post('/pixabay',pixabay.getPictures)

module.exports = router