import React from 'react';

const FrontPage = ({ usernameEntry }) => (
  <div>
    <h2>Welcome to DASHING Health Tracker!</h2>
    <form onSubmit={(e) => usernameEntry(e)}>
      <label for="username" class="form-label">Please Enter your Username: &nbsp;</label>
      <input type="text" name="username" size="25" maxLength="25" placeholder="username" required /> &nbsp;
      <button class="btn btn-primary btn-sm" >GO!</button>
    </form>
  </div>
);

export default FrontPage;
