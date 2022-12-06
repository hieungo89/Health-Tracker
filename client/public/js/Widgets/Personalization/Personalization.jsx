import React from 'react';

const Personalization = ({ username, infoUpdate, returnBtn }) => (
  <div>
    <div>
      <h2>Hi {username}!</h2> <br />
      <h5>Please enter these fields to get started:</h5>
      <p>Fields with * are required</p>
      <form className="container" onSubmit={(e) => infoUpdate(e)}>
        <div className="row">
          <div className="col form-floating">
            <input className="form-control" type="text" name="firstName" placeholder="first name" required />
            <label className="form-label">*First Name: </label>
          </div>
          <div className="col form-floating">
            <input className="form-control" type="text" name="lastName" placeholder="last name" required />
            <label className="form-label">*Last Name: </label>
          </div>
        </div>
        <br /><br />

        <div className="row">
          <div className="col form-floating">
            <input className="form-control" type="number" name="age" min="0" max="100" placeholder="" required />
            <label className="form-label">*Age:</label>
          </div>
          <div className="col"></div>
          <div className="col form-floating">
            <input className="form-control" type="number" min="0" max="10" name="height_ft" placeholder="0" required />
            <label className="form-label">*Height foot:</label>
          </div>
          <div className="col form-floating">
            <input className="form-control" type="number" min="0" max="11" name="height_in" placeholder="0" required />
            <label className="form-label">*Height inch:</label>
          </div>
        </div>
        <br /><br />

        <label className="form-label">*Dietary Goals:</label> <br />
        <textarea className="form-control" type="text" rows="4" cols="30" name="dietary_goals" required />
        <br /><br />

        <label className="form-label">Dietary Restrictions (<em>optional</em>):</label> <br />
        <textarea className="form-control" type="textbox" rows="4" cols="30" name="dietary_restrictions" />
        <br /><br />

        <label className="form-label">Health Complications (<em>optional</em>):</label> <br />
        <textarea className="form-control" type="textbox" rows="4" cols="30" name="health_complications" />
        <br /><br />

        <input className="btn btn-outline-success" type="submit" value="REGISTER" /> &nbsp;
        <button className="btn btn-outline-primary" onClick={returnBtn}>RETURN TO LOGIN</button>
      </form>
    </div>
  </div>
);

export default Personalization;
