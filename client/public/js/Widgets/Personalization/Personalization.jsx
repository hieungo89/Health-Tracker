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
          <input type="text" name="firstName" placeholder="first name" required value="Hieu" /> <br />

          <label>Last Name: </label>  &nbsp;
          <input type="text" name="lastName" placeholder="last name" required value="Ngo" /> <br />

          <label>Age:</label> <br />
          <input type="number" name="age" min="0" max="110" default="0" required value="32" /> <br />

          <label>Height:</label> <br />
          <input type="number" min="0" max="10" name="height_ft" placeholder="0" required value="5"/> ft. &nbsp;
          <input type="number" min="0" max="12" name="height_in" placeholder="0" required value="6"/> inch
          <br />

          <label>Dietary Goals:</label> <br />
          <textarea type="text" name="dietary_goals" value="To have a healthy diet"/> <br />

          <label>Dietary Restrictions:</label> <br />
          <textarea type="textbox" name="dietary_restrictions" value="None"/> <br />

          <label>Health Complications:</label> <br />
          <textarea type="textbox" name="health_complications" value="None"/> <br />

          <input type="submit" value="REGISTER" />
        </form>
      </div>
    </div>
  )
}

export default Personalization;