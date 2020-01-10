const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const dotenv = require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router = require('./routes');

app.use('/', router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))