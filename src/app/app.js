'use strict'
require('./bd/bd')
const express = require('express'),
      app = express();

const basic_paramsRouter = require('./routes/basic_params-routes'),
      callbacks_handlersRouter = require('./routes/callbacks_handlers-routes'),
      api_regexRouter = require('./routes/routerApi_Regex-routes'),
      triggerRouter = require('./routes/triggers-routes');

app.set('PORT', 3001);

// Distincts routers with same path
app.use('/api', basic_paramsRouter);
app.use('/api', callbacks_handlersRouter);
app.use('/api', triggerRouter.routerTrigg1);
app.use('/api', triggerRouter.routerTrigg2);
app.use('/api', triggerRouter.routerTrigg3);
app.use('/api', api_regexRouter);


module.exports = app;