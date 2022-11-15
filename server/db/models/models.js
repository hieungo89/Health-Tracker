const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  age: Number,
  height: {
    foot: Number,
    inch: Number,
  },
  dietaryGoals: String,
  dietaryRestrictions: String,
  healthComplication: String
});

const User = mongoose.model('User', userSchema);

const userData = mongoose.Schema({

});

module.exports = {
  User
};