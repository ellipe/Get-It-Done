'use strict';

const express = require('express');
const morgan = require('morgan');

const config = require('./config');
const db = require('./db');

// start the express app.
const app = express();

// Logger
app.use(morgan('short'))

app.get('/', (req, res) => {
    res.send({
        'message':'Hello World'
    });
});

app.listen(config.get('PORT'), () => {
    console.log(`App is running in port ${config.get('PORT')}`)
});


