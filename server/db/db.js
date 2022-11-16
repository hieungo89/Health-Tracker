const mongoose = require('mongoose');
const database = 'healthTracker';

const db = mongoose.connect(`mongodb://localhost/${database}`);
console.log(`connected to Mongo Database: ${database}`);
module.exports = db;