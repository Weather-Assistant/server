const axios = require('axios')

class pixabayController {
    static getPictures ( req,res,next ) {
        // let keyword = req.body.keyword.split(" ").join('%20')
        axios({
            method:'get',
            url:`https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${req.body.keyword}%20landmark&image_type=photo`
        })
        .then( ({data}) => {
            let random = Math.floor(Math.random() * data.hits.length)
            res.status(200).json({picUrl: data.hits[random].largeImageURL})
        })
        .catch( err => res.status(500).json(err))
    }
}

module.exports = pixabayController