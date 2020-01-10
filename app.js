const express = require('express')
const mongoose = require('mongoose')
const app = express();
const port = 3003;
const cors = require('cors');
const router = require('./routes');
const dotenv = require('dotenv').config();

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

app.use('/', router)
    app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    );
  })
  .catch(err => console.error(`Connection error: ${err.message}`));