import React from 'react';
import Meals from './Meals.jsx';

const DataCapture = ({ handleDataInput }) => {

  return (
    <div>

      <form onSubmit={(e) => handleDataInput(e)}>
        <label>Select Date: </label> &nbsp;
        <input type="date" name="date" value="2022-11-16"/>
        <br /><br />
        <label>Exercise:</label> &nbsp;
        <input type="number" min="0" max="23" name="exercise_hr" value="1"/> Hours &nbsp;
        <input type="number" min="0" max="59" name="exercise_min" value="20"/> Minutes
        <br /><br />
        <label>Sleep:</label> &nbsp;
        <input type="number" min="0" max="23" name="sleep_hr" value="9"/> Hours &nbsp;
        <input type="number" min="0" max="59" name="sleep_min" value="0"/> Minutes
        <br /><br />
        <label>Weight:</label> &nbsp;
        <input type="number" min="0" max="1000" name="weight" value="120"/> lbs taken at <input type="time" name="weight_time" value="12:09"/>
        <br /><br />

        <label>Meals: </label>
        <Meals />

        <br /><br />
        <input type="submit" value="ADD DATA" />
      </form>
    </div >
  );
};

export default DataCapture;