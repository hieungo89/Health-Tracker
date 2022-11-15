import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import FrontPage from './Widgets/FrontPage.jsx';
import Personalization from './Widgets/Personalization/Personalization.jsx';

const App = () => {
  const [username, setUsername] = useState('evolmaniac');

  // const test = () => {
  //   axios.get('http://127.0.0.1:3000/data')
  //     .then(result => console.log('frontend result: ', result));
  // }

  const usernameEntry = (e) => {
    e.preventDefault();
    setUsername(e.target.username.value);
  };

  return (
    <div>
      {!username && <FrontPage usernameEntry={usernameEntry} />}

      {username && <Personalization username={username} />}

    </div>
  );
};

export default App;
