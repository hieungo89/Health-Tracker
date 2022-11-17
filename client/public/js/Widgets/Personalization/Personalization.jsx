import React from 'react';

const Personalization = ({ username, infoUpdate, returnBtn }) => {

  return (
    <div>
      <div>
        <h2>Hi {username}!</h2> <br />
        <h5>Please enter these fields to get started:</h5>
        <p>Fields with * are required</p>
        <form onSubmit={(e) => infoUpdate(e)}>
          <label>*First Name: </label> &nbsp;
          <input type="text" name="firstName" placeholder="first name" required /> <br /><br />

          <label>*Last Name: </label>  &nbsp;
          <input type="text" name="lastName" placeholder="last name" required /> <br /><br />

          <label>*Age:</label> &nbsp;
          <input type="number" name="age" min="0" max="100" required /> <br /><br />

          <label>*Height:</label> &nbsp;
          <input type="number" min="0" max="10" name="height_ft" placeholder="0" required /> ft. &nbsp;
          <input type="number" min="0" max="11" name="height_in" placeholder="0" required /> inch
          <br /><br />

          <label>*Dietary Goals:</label> <br />
          <textarea type="text" rows="4" cols="30" name="dietary_goals" required />
          <br /><br />

          <label>Dietary Restrictions (<em>optional</em>):</label> <br />
          <textarea type="textbox" rows="4" cols="30" name="dietary_restrictions" />
          <br /><br />

          <label>Health Complications (<em>optional</em>):</label> <br />
          <textarea type="textbox" rows="4" cols="30" name="health_complications" />
          <br /><br />

          <input type="submit" value="REGISTER" /> &nbsp;
          <button onClick={returnBtn}>RETURN TO LOGIN</button>
        </form>
      </div>
    </div>
  )
}

export default Personalization;
