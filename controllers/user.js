const axios = require('axios');
const { OAuth2Client } = require('google-auth-library');
const { User } = require('../models');
const { generateToken } = require('../helpers');

class UserController {
  static signIn(req, res, next) {
    let payload = null;
    const client = new OAuth2Client(process.env.CLIENT_ID);

    // verify id dulu
    client
      .verifyIdToken({
        idToken: req.body.id_token,
        audience: process.env.CLIENT_ID
      })
      // kemudian dapetin payload-nya
      // payload-nya ambil email saja
      .then(ticket => {
        payload = ticket.getPayload();
        console.log('1');
        // cari user di database
        return User.findOne({
          email: payload.email
        });
      })
      // dapetin user-nya dari database
      .then(user => {
        // jika ada, generate token langsung
        if (user) {
          const token = generateToken(user._id);
          res.status(200).json(token);
        }

        // jika tidak, bikin dulu user di database
        return User.create({
          email: payload.email,
          password: process.env.DEFAULT_PASSWORD
        });
      })
      // dapetin user-nya dari database yang sudah dibikin
      .then(data => {
        // baru generate token
        const token = generateToken(data._id);
        res.status(200).json(token);
      })
      .catch(err => res.send(err));
  }
}

module.exports = UserController;
