// const path = require('path');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const controller = require('./db/controller/controller.js');
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.post('/user', (req, res) => {
  controller.findUserAndUpdate(req.body)
    .then(result => res.status(202).end())
    .catch(err => res.status(404).send('Error Posting: ', err));
})

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port: ${port}`));
