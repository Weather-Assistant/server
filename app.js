const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/index')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',routes)

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})
