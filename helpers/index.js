const generateHash = require('./bcrypt');
const generateToken = require('./jwt');

module.exports = {
  generateHash,
  generateToken
};
