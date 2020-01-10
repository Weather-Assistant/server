const axios = require('axios')

class airVisualController{
  static getCountry(req, res, next){
    axios({
      method: 'GET',
      url: `http://api.airvisual.com/v2/countries?key=${process.env.AIR_VISUAL_KEY}`
    })
      .then(({data}) => {
        res.status(200).json(data)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  }
  static getState(req, res, next){
    axios({
      method: 'GET',
      url: `http://api.airvisual.com/v2/states?country=${req.params.country}&key=${process.env.AIR_VISUAL_KEY}`
    })
      .then(({data}) => {
        res.status(200).json(data)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  }
  static getCity(req, res, next){
    axios({
      method: 'GET',
      url: `http://api.airvisual.com/v2/cities?state=${req.params.state}&country=${req.params.country}&key=${process.env.AIR_VISUAL_KEY}`
    })
      .then(({data}) => {
        res.status(200).json(data)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  }
  static getWeather(req, res, next){
    axios({
      method: 'GET',
      url: `http://api.airvisual.com/v2/city?city=${req.params.city}&state=${req.params.state}&country=${req.params.country}&key=${process.env.AIR_VISUAL_KEY}`
    })
      .then(({data}) => {
        let weather = data.data.current.weather.ic
        let description = ''
        if (weather.includes('01')){
          description = 'clear sky'
        }
        else if (weather.includes('02')){
          description = 'few clouds'
        }  
        else if (weather.includes('03')){
          description = 'scattered clouds'
        }  
        else if (weather.includes('04')){
          description = 'broken clouds'
        }  
        else if (weather.includes('09')){
          description = 'shower rain'
        }  
        else if (weather.includes('10')){
          description = 'rain'
        }  
        else if (weather.includes('11')){
          description = 'thunderstorm'
        }  
        else if (weather.includes('13')){
          description = 'snow'
        }  
        else if (weather.includes('50')){
          description = 'mist'
        } 
        let jsonData = {
          weather,
          description
        }
        res.status(200).json(jsonData)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  }
}

module.exports = airVisualController