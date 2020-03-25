const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors()); // remember to add origin: 'http from server'
app.use(express.json());
app.use(routes);
    

app.listen(3333);