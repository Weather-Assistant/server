const axios = require('axios')

class airVisualController{
  static getCountry(req, res, next){
    axios({
      method: 'GET',
      url: `http://api.airvisual.com/v2/countries?key=${process.env.AIR_VISUAL_KEY}`
    })
      .then(({data}) => {
        console.log(data)
        res.status(200).json(data)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json({message: `Error`})
      })
  }
  static getState(req, res, next){
    axios({
      method: 'GET',
      url: `http://api.airvisual.com/v2/states?country=${req.params.country}&key=${process.env.AIR_VISUAL_KEY}`
    })
      .then(({data}) => {
        console.log(data)
        res.status(200).json(data)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json({message: `Error`})
      })
  }
  static getCity(req, res, next){
    axios({
      method: 'GET',
      url: `http://api.airvisual.com/v2/cities?state=${req.params.state}&country=${req.params.country}&key=${process.env.AIR_VISUAL_KEY}`
    })
      .then(({data}) => {
        console.log(data)
        res.status(200).json(data)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json({message: `Error`})
      })
  }
  static getWeather(req, res, next){
    axios({
      method: 'GET',
      url: `http://api.airvisual.com/v2/city?city=${req.params.city}&state=${req.params.state}&country=${req.params.country}&key=${process.env.AIR_VISUAL_KEY}`
    })
      .then(({data}) => {
        console.log(data)
        res.status(200).json(data)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json({message: `Error`})
      })
  }
}

module.exports = airVisualController