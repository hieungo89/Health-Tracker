import React from 'react';

const DailyMeals = ({ eachUserData }) => {
  const { date, mealType, foodsEaten, nutrientCount } = eachUserData;

  return (
    <div>
      <br />
      <p>
        Date: {date}, Meal Type: {mealType}
        <br /><br />
        List of foods eaten:
        <br />
        - {foodsEaten}
        <br />
        Total Nutrient Counts:
        <li>Calories: {nutrientCount.calories.quantity}{nutrientCount.calories.unit}</li>
        <li>Fat: {nutrientCount.fat.quantity}{nutrientCount.fat.unit}</li>
        <li>Carbohydrate: {nutrientCount.carbohydrate.quantity}{nutrientCount.carbohydrate.unit}</li>
        <li>Protein: {nutrientCount.protein.quantity}{nutrientCount.protein.unit}</li>
        <li>Cholesterol: {nutrientCount.cholesterol.quantity}{nutrientCount.cholesterol.unit}</li>
        <li>Fiber: {nutrientCount.fiber.quantity}{nutrientCount.fiber.unit}</li>
        <li>Sodium: {nutrientCount.sodium.quantity}{nutrientCount.sodium.unit}</li>
        <li>Sugar: {nutrientCount.sugar.quantity}{nutrientCount.sugar.unit}</li>
      </p>
    </div>
  );
};

export default DailyMeals;
