import React from 'react';

const Personalization = ({ username }) => {

  return (
    <div>
      <br /><br />


      <h1>
        <em>
          Personalization
        </em>
      </h1>
      <div>
        <h3>
          Welcome {username}!
        </h3>
        <h4>
          Please enter these fields to get started:
        </h4>

      </div>


      <br /><br />
    </div>
  )
}

export default Personalization;