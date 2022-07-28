const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
  next();
});
app.use(routes);
app.use((error, request, response, next) => {
  console.log('#### Error handler');
  console.log(error);
  response.sendStatus(500);
});

app.listen(3001, () => console.log(':) Server started at http://localhost:3001'));
