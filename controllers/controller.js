const axios = require('axios');

const calendarificAPI = 'https://calendarific.com/api/v2';
class CalendarifiController {
  static getCalender(req, res, next) {
    const key = process.env.CALENDARIFIC_KEY;
    axios
      .get(
        `${calendarificAPI}/holidays?api_key=${key}&country=${req.body.country}&year=${req.body.year}&month=1`
      )
      .then(({ data }) => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.json(err);
      });
  }
}

module.exports = CalendarifiController