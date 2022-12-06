import React from 'react';

const DataCapture = ({ handleDataInput, handleReturnBtn }) => (
  <div>
    <br />
    <h4>Please fill out ALL fields in order to record your data.</h4>
    <li>Put 0's for any data you <b>don't</b> want to record</li>
    <br />
    <em>*Warning:  Adding data on the same date will override the previous data.</em>

    <form onSubmit={(e) => handleDataInput(e)}>
      <br />
      <label>Select Date: </label> &nbsp;
      <input type="date" name="date" required />
      <br /><br />
      <label>Exercise:</label> &nbsp;
      <input type="number" min="0" max="23" name="exercise_hr" required /> Hours &nbsp;
      <input type="number" min="0" max="59" name="exercise_min" required /> Minutes
      <br /><br />
      <label>Sleep:</label> &nbsp;
      <input type="number" min="0" max="23" name="sleep_hr" required /> Hours &nbsp;
      <input type="number" min="0" max="59" name="sleep_min" required /> Minutes
      <br /><br />
      <label>Weight:</label> &nbsp;
      <input type="number" min="0" max="1000" name="weight" required /> lbs, taken at <input type="time" name="weight_time" required />
      <br /><br />
      <input className="btn btn-outline-success" type="submit" value="ADD DATA" /> &nbsp;
      <button className="btn btn-outline-primary"  onClick={() => handleReturnBtn()} >RETURN</button>
    </form>
  </div >
);

export default DataCapture;
