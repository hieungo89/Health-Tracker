import React from 'react';
import DailyMeals from './DailyMeals.jsx';

const DailyMealsList = ({ currentUserMeal }) => (
  <div>
    <br />
    <h4>DAILY MEALS LIST</h4>

    {currentUserMeal.map(data => { return <DailyMeals eachUserData={data} key={data._id} /> })}
  </div>
);

export default DailyMealsList;
