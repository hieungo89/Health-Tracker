const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  firstName: String,
  lastName: String,
  age: Number,
  height: {
    foot: Number,
    inch: Number
  },
  dietaryGoals: { type: String },
  dietaryRestrictions: { type: String, default: null },
  healthComplications: { type: String, default: 'None' },
});

const User = mongoose.model('User', userSchema);

const userData = mongoose.Schema({
});

module.exports = {
  User
};