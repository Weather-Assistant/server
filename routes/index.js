const router = require('express').Router();

const pixabay = require('../controllers/pixabayController')
const calendarificRouter = require('./calendarific');
const userRouter = require('./user');
const airVisualRouter = require('./airVisual');

router.use('/calendarific', calendarificRouter)
router.use('/airvisual', airVisualRouter)
router.post('/pixabay',pixabay.getPictures)
router.use('/sign-in', userRouter);

module.exports = router;
