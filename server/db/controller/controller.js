const { User, UserData, NutritionData } = require('../models/models.js');

const findUser = ({ username }) => {
  return User.find({ username: username });
};

const findUserAndUpdate = async ({ username, firstName, lastName, age, height, dietaryGoals, dietaryRestrictions, healthComplications }) => {
  const filter = { username: username };
  const update = {
    username: username,
    firstName: firstName,
    lastName: lastName,
    age: age,
    height: {
      foot: height.foot,
      inch: height.inch,
    },
    dietaryGoals: dietaryGoals,
    dietaryRestrictions: dietaryRestrictions,
    healthComplications: healthComplications,
  }
  // console.log('search username: ', filter)
  // console.log('fields to update: ', update)

  await User.findOneAndUpdate(filter, update, {
    new: true,
    upsert: true
  });
  return;
};




const findUserData = ({ username }) => {
  return UserData.find({ username: username });
};

const insertUserData = async ({ username, firstName, lastName, date, weight, sleep, exercise }) => {
  const filter = { username: username, firstName: firstName, lastName: lastName }
  const data = {
    username: username,
    firstName: firstName,
    lastName: lastName,
    date: date,
    weight: {
      weightData: weight.weightData,
      weightTime: weight.weightTime,
    },
    sleep: {
      sleep_hr: sleep.sleep_hr,
      sleep_min: sleep.sleep_min,
    },
    exercise: {
      exercise_hr: exercise.exercise_hr,
      exercise_min: exercise.exercise_min,
    },
  };
  console.log('insert data: ', data);

  await UserData.findOneAndUpdate(filter, data, {
    new: true,
    upsert: true
  });
  return;
};





const findIngredientAndUpdate = async ({ searchString, food, quantity, measure, calories, fat, carbohydrate, fiber, sugar, protein, cholesterol, sodium }) => {
  const filter = { food: food, quantity: quantity, measure: measure };
  const update = {
    searchString: searchString,
    food: food,
    quantity: quantity,
    measure: measure,
    calories: {
      label: calories.label,
      quantity: calories.quantity,
      unit: calories.unit,
    },
    fat: {
      label: fat.label,
      quantity: fat.quantity,
      unit: fat.unit,
    },
    carbohydrate: {
      label: carbohydrate.label,
      quantity: carbohydrate.quantity,
      unit: carbohydrate.unit,
    },
    fiber: {
      label: fiber.label,
      quantity: fiber.quantity,
      unit: fiber.unit,
    },
    sugar: {
      label: sugar.label,
      quantity: sugar.quantity,
      unit: sugar.unit,
    },
    protein: {
      label: protein.label,
      quantity: protein.quantity,
      unit: protein.unit,
    },
    cholesterol: {
      label: cholesterol.label,
      quantity: cholesterol.quantity,
      unit: cholesterol.unit,
    },
    sodium: {
      label: sodium.label,
      quantity: sodium.quantity,
      unit: sodium.unit,
    }
  };

  console.log('controller --------------------------------------- ');
  console.log('filter: ', filter);
  console.log('update: ', update);

  await NutritionData.findOneAndUpdate(filter, update, {
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
  findIngredientAndUpdate,
};