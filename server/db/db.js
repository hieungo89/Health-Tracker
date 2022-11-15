const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/user');
console.log('connected to Mongo Database');
module.exports = db;