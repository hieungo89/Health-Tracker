// const path = require('path');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('../server/db/db.js');
const controller = require('./db/controller/controller.js');
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/user', (req, res) => {
  console.log('request: ', req.query);
  controller.findUser(req.query)
    .then(result => res.status(202).send(result[0]))
    .catch(err => res.status(404).send('Error Retrieving Data: ', err));
});

app.post('/user', (req, res) => {
  controller.findUserAndUpdate(req.body)
    .then(result => res.status(202).end())
    .catch(err => res.status(404).send('Error Posting: ', err));
})

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port: ${port}`));
