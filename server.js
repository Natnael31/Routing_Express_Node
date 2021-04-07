'use strict'
const http = require('http'),
      express = require('express'),
      app = express();

app.set('PORT', 3001);

const server = http.createServer(app);

server.listen(app.get('PORT'), () => {
    console.log(`Server is running on http://localhost:${app.get('PORT')}`);
})
