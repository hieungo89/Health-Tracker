import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import FrontPage from './Widgets/FrontPage.jsx';
import Personalization from './Widgets/Personalization/Personalization.jsx';
import UserPage from './Widgets/DailyData/UserPage.jsx';

const App = () => {
  const [username, setUsername] = useState('evolmaniac');
  const [userInformation, setUserInformation] = useState();
  const userInfo = useRef({});

  // const test = () => {
  //   axios.get('http://127.0.0.1:3000/data')
  //     .then(result => console.log('frontend result: ', result));
  // }

  const usernameEntry = (name) => {
    name.preventDefault();
    setUsername(name.target.username.value);
  };

  const userInfoUpdate = (data) => {
    data.preventDefault();
    console.log('data: ', data);
    // { age, height } = data;
    setUserInformation({});
  };

  return (
    <div>
      {!username && <FrontPage usernameEntry={usernameEntry} />}

      {username && !userInformation && <Personalization username={username} infoUpdate={userInfoUpdate} />}

      {username && userInformation && <UserPage />}
    </div>
  );
};

export default App;
