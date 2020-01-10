const calendarificRouter = require('express').Router();
const { CalendarifiController } = require('../controllers/');

calendarificRouter.get('/calender', CalendarifiController.getCalender);

module.exports = calendarificRouter;
