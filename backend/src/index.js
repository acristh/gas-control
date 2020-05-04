const express = require('express');
// const cors = require('cors')

const app = express();

const routes = require('./routes');

app.listen(3333);

app.use(express.json());

app.use(routes);