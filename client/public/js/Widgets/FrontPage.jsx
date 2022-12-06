import React from 'react';

const FrontPage = ({ usernameEntry }) => (
  <div>
    <h2>Welcome to DASHING Health Tracker!</h2>
    <form onSubmit={(e) => usernameEntry(e)}>
      <label className="form-label">Please Enter your Username: &nbsp;</label>
      <input type="text" name="username" size="25" maxLength="25" placeholder="username" required /> &nbsp;
      <button className="btn btn-primary btn-sm" >GO!</button>
    </form>
  </div>
);

export default FrontPage;
