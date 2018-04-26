// Database connection settings.
const mongoose = require('mongoose');
const config = require('./config');


mongoose.connect(`mongodb://${config.get('MONGO_USER')}:${config.get('MONGO_PASS')}@${config.get('MONGO_URL')}/${config.get('MONGO_DATABASE')}`);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log("Connected to database");
});

module.exports = db;