const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  firstName: String,
  lastName: String,
  age: Number,
  height: {
    foot: Number,
    inch: Number
  },
  dietaryGoals: { type: String },
  dietaryRestrictions: { type: String, default: null },
  healthComplications: { type: String, default: 'None' },
});
const User = mongoose.model('User', userSchema);


const userDataSchema = mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  date: String,
  weight: {
    weightData: Number,
    weightTime: String,
  },
  sleep: {
    sleep_hr: Number,
    sleep_min: Number,
  },
  exercise: {
    exercise_hr: Number,
    exercise_min: Number,
  },
});
const UserData = mongoose.model('UserData', userDataSchema);


const userMealDataSchema = mongoose.Schema({
  username: String,
  date: String,
  mealType: String,
  foodsEaten: String,
  nutrientCount: {
    calories: { quantity: Number, unit: String },
    fat: { quantity: Number, unit: String },
    carbohydrate: { quantity: Number, unit: String },
    fiber: { quantity: Number, unit: String },
    sugar: { quantity: Number, unit: String },
    protein: { quantity: Number, unit: String },
    cholesterol: { quantity: Number, unit: String },
    sodium: { quantity: Number, unit: String }
  }
});
const UserMealData = mongoose.model('UserMealData', userMealDataSchema);


const nutritionDataSchema = mongoose.Schema({
  searchString: String,
  food: String,
  quantity: Number,
  measure: String,
  calories: { label: String, quantity: Number, unit: String },
  fat: { label: String, quantity: Number, unit: String },
  carbohydrate: { label: String, quantity: Number, unit: String },
  fiber: { label: String, quantity: Number, unit: String },
  sugar: { label: String, quantity: Number, unit: String },
  protein: { label: String, quantity: Number, unit: String },
  cholesterol: { label: String, quantity: Number, unit: String },
  sodium: { label: String, quantity: Number, unit: String },

});
const NutritionData = mongoose.model('NutritionData', nutritionDataSchema);


module.exports = {
  User,
  UserData,
  UserMealData,
  NutritionData,
};