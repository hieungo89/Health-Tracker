import React from 'react';

const DailyMeals = ({ eachUserData, nutrientsData }) => {
  const { date, mealType, foodsEaten, nutrientCount } = eachUserData;

  return (
    <div>
      <br />
      <p>
        Date: {moment(date).format('MM/DD/Y')} <br />
        Meal Type: {mealType}
        <br /><br />
        List of foods eaten:
        <br />
        - {foodsEaten}
        <br /><br />
        Total Nutrient Counts:
        {nutrientsData.map(data => {
          if (nutrientCount[data]) {
            return <li key={data}>{data}: {nutrientCount[data].quantity}{nutrientCount[data].unit}</li>
          }
        })}
      </p>
    </div>
  );
};

export default DailyMeals;
