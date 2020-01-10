const calendarificRouter = require('express').Router();
const { CalendarifiController } = require('../controllers/');

calendarificRouter.post('/calender', CalendarifiController.getCalender);

module.exports = calendarificRouter;
