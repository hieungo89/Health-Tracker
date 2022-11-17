const { User, UserData, UserMealData, NutritionData } = require('../models/models.js');

// ~~~~ USER PROFILE ~~~~ //
const findUser = ({ username }) => {
  return User.find({ username: username });
};
const findUserAndUpdate = async (data) => {
  console.log('~~ INSERT USER PROFILE ~~ ', data);
  const filter = { username: data.username };

  await User.findOneAndUpdate(filter, data, {
    new: true,
    upsert: true
  });
  return;
};


// ~~~~ USER DATA - EXERCISE, SLEEP, WEIGHT ~~~~ //
const findUserData = ({ username }) => {
  return UserData.find({ username: username });
};
const insertUserData = async (data) => {
  console.log('~~ INSERT USER DATA ~~ ', data);
  const filter = { username: data.username, firstName: data.firstName, lastName: data.lastName, date: data.date }

  await UserData.findOneAndUpdate(filter, data, {
    new: true,
    upsert: true
  });
  return;
};


// ~~~~ USER DATA - MEALS ~~~~ //
const findMealData = ({ username }) => {
  return UserMealData.find({ username: username });
};
const findMealDataAndUpdate = async (data) => {
  console.log('~~ INSERT MEALS DATA ~~ ', data)
  const filter = { username: data.username, mealType: data.mealType, date: data.date }

  await UserMealData.findOneAndUpdate(filter, data, {
    new: true,
    upsert: true
  });
  return;
};


// ~~~~ NUTRITION API & OWN DATABASE ~~~~ //
const findIngredient = (ingredient) => {
  return NutritionData.find({ searchString: ingredient })
};
const findIngredientAndUpdate = async (data) => {
  console.log('~~ ADD INGREDIENT DATA ~~ ', data)

  const filter = { food: data.food, quantity: data.quantity, measure: data.measure };
  await NutritionData.findOneAndUpdate(filter, data, {
    new: true,
    upsert: true
  });
  return;
};

module.exports = {
  findUser,
  findUserAndUpdate,
  findUserData,
  insertUserData,
  findMealData,
  findMealDataAndUpdate,
  findIngredient,
  findIngredientAndUpdate,
};