// Database connection settings.
const mongoose = require('mongoose');
const config = require('./config');


mongoose.connect(config.get('MONGO_URL'));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log("Connected to database");
});

module.exports = db;