import React from 'react';

const Personalization = ({ username, infoUpdate }) => {

  return (
    <div>
      <h2><em>Personalization</em></h2>

      <div>
        <h3>Welcome {username}!</h3> <br />
        <h5>Please enter these fields to get started:</h5>
        <form onSubmit={(e) => infoUpdate(e)}>
          <label>First Name: </label> &nbsp;
          <input type="text" name="firstName" placeholder="first name" /> <br />
          <label>Last Name: </label>  &nbsp;
          <input type="text" name="lastName" placeholder="last name" /> <br />
          <label>Age:</label> <br />
          <input type="number" name="age" min="0" max="110" placeholder="0" /> <br />
          <label>Height:</label> <br />
          <input type="number" min="0" max="10" name="height-foot" placeholder="0" /> ft. &nbsp;
          <input type="number" min="0" max="12" name="height-inch" placeholder="0" /> inch
          <br />
          <label>Dietary Goals:</label> <br />
          <textarea type="text" name="dietary-goals" /> <br />
          <label>Dietary Restrictions:</label> <br />
          <textarea type="textbox" name="dietary-restrictions" /> <br />
          <label>Health Complications:</label> <br />
          <textarea type="textbox" name="health-complications" /> <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Personalization;