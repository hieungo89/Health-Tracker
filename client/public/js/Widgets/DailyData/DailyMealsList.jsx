import React, { useState } from 'react';
import DailyMeals from './DailyMeals.jsx';

const DailyMealsList = ({ currentUserMeal }) => {
  const [query, setQuery] = useState('');

  const filteredItems = currentUserMeal.filter(item => {
    if (
      moment(item.date).format('dddd, MMMM D, Y').toLowerCase().includes(query.toLowerCase()) ||
      item.mealType.toLowerCase().includes(query.toLowerCase())
    ) {
      return item;
    }
  });

  return (
    <div className="data-container">
      <br />
      <div className="data-title">
        <h4>DAILY MEALS LIST</h4>
        Search:
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      {filteredItems.map(data => { return <DailyMeals eachUserData={data} key={data._id} /> })}
    </div>
  );
};

export default DailyMealsList;
