import React from 'react';

const FrontPage = ({ usernameEntry }) => (
  <div>
    <h2>Welcome to DASHING Health Tracker!</h2>
    ─=≡Σ((( つ•̀ω•́)つ
    <h5>Please enter your username: <br /></h5>

    <form onSubmit={(e) => usernameEntry(e)}>
      <input type="text" name="username" placeholder="username" required /> &nbsp;
      <input type="submit" />
    </form>

  </div>
);

export default FrontPage;
