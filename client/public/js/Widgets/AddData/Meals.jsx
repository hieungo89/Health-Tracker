import React, { useState } from 'react';
import AddMeals from './AddMeals.jsx';

const Meals = ({ handleMealInput }) => {
  const [mealType, setMealType] = useState()
  const [foodData, setFoodData] = useState([])

  const searchNutritionInfo = (e) => {
    e.preventDefault();
    console.log('search: ', e);
    const query = `${e.target.amount.value} ${e.target.measurement.value} of ${e.target.foodName.value}`;
    console.log('foodQuery: ', query)



  };



  return (
    <div>
      MEALS

      <form >
        <br />
        <input type="submit" value="ADD MEAL" onClick={handleMealInput} />
        <br /><br />
        <label>Select Date: </label> &nbsp;
        <input type="date" name="date" value="2022-11-16" />
        <br /><br />
        <label>Meal Type:</label> &nbsp;
        <select value={mealType} name="mealType" onChange={(e) => setMealType(e.target.value)}>
          <option hidden>--</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
          <option value="TeaTime">TeaTime</option>
          <option value="Other">Other</option>
        </select>
        <br /><br />



      </form>

      <form onSubmit={(e) => searchNutritionInfo(e)}>
        <label>Add Description:</label> <br />
        <input type="number" name="amount" placeholder="1" min="0" max="100" /> &nbsp;
        <input type="text" name="measurement" placeholder="cup" size="8" /> of &nbsp;
        <input type="text" name="foodName" placeholder="spaghetti" size="10" /> &nbsp;
        <input type="submit" value="ADD" />
      </form>
    </div>
  );
};

export default Meals;
