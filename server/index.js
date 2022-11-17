require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('../server/db/db.js');
const controller = require('./db/controller/controller.js');
const axios = require('axios');
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// ~~~~ USER PROFILE ~~~~ //
app.get('/healthTracker', (req, res) => {
  console.log('request: ', req.query);
  controller.findUser(req.query)
    .then(result => {
      console.log('~~~ GET USER PROFILE ~~~', result)
      res.status(202).send(result[0]);
    })
    .catch(err => res.status(404).send('Error Retrieving User: ', err));
});
app.post('/healthTracker', (req, res) => {
  controller.findUserAndUpdate(req.body)
    .then(result => res.status(202).end())
    .catch(err => res.status(404).send('Error Updating User: ', err));
});

// ~~~~ USER DATA - EXERCISE, SLEEP, WEIGHT ~~~~ //
app.get('/userData', (req, res) => {
  // console.log('get userdata: ', req.query);
  controller.findUserData(req.query)
    .then(result => {
      console.log('~~~ GET USER DATA ~~~', result)
      res.status(202).send(result[0]);
    })
    .catch(err => res.status(404).send('Error Retrieving User: ', err));
});
app.post('/userData', (req, res) => {
  controller.insertUserData(req.body)
    .then(result => res.status(202).end())
    .catch(err => res.status(404).send('Error adding User Data: ', err));
});

// ~~~~ USER DATA - MEALS ~~~~ //
app.get('/userMeal', (req, res) => {
  controller.findMealData(req.query)
    .then(result => {
      console.log('~~~ GET MEALS ~~~', result);
      res.status(202).send(result);
    })
    .catch(err => res.status(404).send('Error Retrieving User: ', err));
});
app.post('/userMeal', (req, res) => {
  controller.findMealDataAndUpdate(req.body)
    .then(result => res.status(202).end())
    .catch(err => res.status(404).send('Error adding Meal: ', err));
})

// ~~~~ NUTRITION API & OWN DATABASE ~~~~ //
app.get('/nutritionData', (req, res) => {
  controller.findIngredient(req.query.ingr)
    .then(result => {
      console.log('~~~ GET INGREDIENT RESULT FROM DB ~~~', result);
      if (result.length > 0) {
        res.status(202).send(result[0]);
      } else {
        axios.get(`https://api.edamam.com/api/nutrition-data?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&ingr=${req.query.ingr}`)
          .then(result => {
            const data = {
              searchString: req.query.ingr,
              food: result.data.ingredients[0].parsed[0].food,
              quantity: result.data.ingredients[0].parsed[0].quantity,
              measure: result.data.ingredients[0].parsed[0].measure,
              calories: result.data.totalNutrients.ENERC_KCAL || {},
              fat: result.data.totalNutrients.FAT || {},
              carbohydrate: result.data.totalNutrients.CHOCDF || {},
              fiber: result.data.totalNutrients.FIBTG || {},
              sugar: result.data.totalNutrients.SUGAR || {},
              protein: result.data.totalNutrients.PROCNT || {},
              cholesterol: result.data.totalNutrients.CHOLE || {},
              sodium: result.data.totalNutrients.NA || {},
            }
            return data;
          })
          .then(data => {
            console.log('~~~ GET INGREDIENT RESULT FROM API ~~~', result);
            controller.findIngredientAndUpdate(data);
            res.status(200).send(data);
          })
          .catch(err => res.status(404).send('Error Searching for Nutrition labels: ', err));
      }
    })
});

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port: ${port}`));
