const mongoose = require('mongoose');

const db = mongoose.connect(`${process.env.MONGODB_URL}`);
console.log(`connecting to Mongo Database: ${process.env.DATABASE}`);
module.exports = db;
