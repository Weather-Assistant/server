const calendarificRouter = require('express').Router();

const CalendarificController = require('../controllers/controller');

calendarificRouter.post('/calender', CalendarificController.getCalender)

module.exports = calendarificRouter
