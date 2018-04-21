'use strict';

const express = require('express');
const config = require('./config');
const db = require('./db');

// start the express app.

const app = express();

app.get('/', (req, res) => {
    res.json({
        'message':'Hello World'
    });
});

app.listen(config.get('PORT'), () => {
    console.log(`App is running in port ${config.get('PORT')}`)
});


