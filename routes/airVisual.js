const express = require('express')
const router = express.Router()
const Controller = require('../controllers/airVisualController')

router.get('/country', Controller.getCountry)
router.get('/:country/state', Controller.getState)
router.get('/:country/:state/city', Controller.getCity)
router.get('/:country/:state/:city', Controller.getWeather)

module.exports = router