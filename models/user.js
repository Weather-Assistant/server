const mongoose = require('mongoose');
const { generateHash } = require('../helpers');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

userSchema.pre('save', function(next) {
  console.log(this);
  this.password = generateHash(this.password);
  next();
});

module.exports = mongoose.model('User', userSchema);
