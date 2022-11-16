const { User } = require('../models/models.js');

const findUser = ({ username }) => {
  return User.find({ username: username });
};

const findUserAndUpdate = async ({username, firstName, lastName, age, height, dietaryGoals, dietaryRestrictions, healthComplications}) => {
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
  console.log('search username: ', filter)
  console.log('fields to update: ', update)

  await User.findOneAndUpdate(filter, update, {
    new: true,
    upsert: true
  });

  return;
}

module.exports = {
  findUser,
  findUserAndUpdate,
};