// const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/data', (req, res) => {
  console.log('data clicked from front end')
  res.send();
})


const port = 3000;
app.listen(port, console.log(`Listening on port: ${port}`));
