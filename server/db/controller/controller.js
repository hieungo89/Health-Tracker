const db = require('../db.js');
const { User } = require('../models/models.js');

const findUserAndUpdate = async (info) => {
  // const filter = { username: info.username };
  // const update = {
  //   username: info.username,
  //   firstName: info.firstName,
  //   lastName: info.lastName,
  //   age: info.age,
  //   height: {
  //     foot: info.foot,
  //     inch: info.inch,
  //   },
  //   dietaryGoals: info.dietaryGoals,
  //   dietaryRestrictions: info.dietaryRestrictions,
  //   healthComplication: info.healthComplication
  // }
  const filter = { username: 'hue' };
  const update = {
    username: 'hue',
    firstName: 'Hieu',
    lastName: 'Ngo',
    age: 32,
    height: {
      foot: 5,
      inch: 6,
    },
    dietaryGoals: 'Eat Healthy',
    dietaryRestrictions: 'nuts',
    healthComplication: 'none',
  }

  console.log('filtered: ', filter);

  await User.findOneAndUpdate(filter, update, {
    new: true,
    upsert: true
  });

  return;
}

module.exports = {
  findUserAndUpdate
};