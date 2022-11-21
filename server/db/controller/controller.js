const { User, UserData, UserMealData, NutritionData } = require('../models/models.js');

// ~~~~ USER PROFILE ~~~~ //
const findUser = ({ username }) => {
  return User.find({ username: username });
};
const findUserAndUpdate = async (data) => {
  // console.log('~~ INSERT USER PROFILE ~~ ', data);
  const filter = { username: data.username };
  return await User.findOneAndUpdate(filter, data, { upsert: true });
};

// ~~~~ USER DATA - EXERCISE, SLEEP, WEIGHT ~~~~ //
const findUserData = ({ username }) => {
  return UserData.find({ username: username }).sort({ date: 1 });
};
const insertUserData = async (data) => {
  // console.log('~~ INSERT USER DATA ~~ ', data);
  const filter = { username: data.username, firstName: data.firstName, lastName: data.lastName, date: data.date }

  return await UserData.findOneAndUpdate(filter, data, { upsert: true });

};

// ~~~~ USER DATA - MEALS ~~~~ //
const findMealData = ({ username }) => {
  return UserMealData.find({ username: username }).sort({ date: 1, mealId: 1 });
};
const findMealDataAndUpdate = async (data) => {
  if (data.mealType === 'Breakfast') { data.mealId = 1 };
  if (data.mealType === 'Brunch') { data.mealId = 2 };
  if (data.mealType === 'Lunch') { data.mealId = 3 };
  if (data.mealType === 'Dinner') { data.mealId = 4 };
  if (data.mealType === 'Snack') { data.mealId = 5 };
  if (data.mealType === 'TeaTime') { data.mealId = 6 };
  if (data.mealType === 'Other') { data.mealId = 7 };
  data.foodsEaten = data.foodsEaten.toLowerCase();
  const filter = { username: data.username, mealType: data.mealType, date: data.date };

  return await UserMealData.findOneAndUpdate(filter, data, { upsert: true });
};

// ~~~~ NUTRITION API & OWN DATABASE ~~~~ //
const findIngredient = (ingredient) => {
  return NutritionData.find({ searchString: ingredient })
};
const findIngredientAndUpdate = async (data) => {
  // console.log('~~ ADD INGREDIENT DATA ~~ ', data)
  const filter = { food: data.food, quantity: data.quantity, measure: data.measure };
  return await NutritionData.findOneAndUpdate(filter, data, { upsert: true });
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