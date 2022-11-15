import React from 'react';

const FrontPage = ({ usernameEntry }) => {

  return (
    <div>
      <h2>Welcome to DASHING Health Tracker App!</h2>
      <br />
      <h5>Please enter your username: <br /></h5>

      <form onSubmit={(e) => usernameEntry(e)}>
        <input type="text" name="username" placeholder="username" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default FrontPage;
