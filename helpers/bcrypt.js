const bcrypt = require('bcrypt');

function generateHash(password) {
  const saltRound = 8;
  const salt = bcrypt.genSaltSync(saltRound);
  const hash = bcrypt.hashSync(password, salt);

  return hash;
}

module.exports = generateHash;
