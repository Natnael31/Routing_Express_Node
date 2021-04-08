'use strict'
require('./bd/bd')
const express = require('express'),
      app = express();

const router = require('./routes/routes')
app.set('PORT', 3001);

app.use('/api', router);

module.exports = app;