const router = require('express').Router();

const pixabay = require('../controllers/pixabayController')
const calendarificRouter = require('./calendarific');
const airVisualRouter = require('./airVisual');

router.use('/calendarific', calendarificRouter)
router.use('/airvisual', airVisualRouter)
router.post('/pixabay',pixabay.getPictures)

module.exports = router