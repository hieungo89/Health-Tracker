import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import FrontPage from './Widgets/FrontPage.jsx';
import Personalization from './Widgets/Personalization/Personalization.jsx';
import UserPage from './Widgets/UserPage.jsx';

const App = () => {
  const [username, setUsername] = useState('hue');
  const [userInformation, setUserInformation] = useState();
  const userInfo = useRef({});

  const usernameEntry = (name) => {
    let username;
    if (name.type === 'submit') {
      name.preventDefault();
      username = name.target.username.value;
    } else {
      username = name;
    }
    axios.get(`http://localhost:3000/user`, { params: { username } })
      .then(result => {
        if (result.data) {
          setUsername(result.data.username);
          setUserInformation(result.data);
        } else { setUsername(username) }
      })
      .catch(err => console.log('Error backend GET: ', err));
  };

  const userInfoUpdate = (data) => {
    data.preventDefault();
    const { firstName, lastName, age, height_ft, height_in, dietary_goals, dietary_restrictions, health_complications } = data.target;
    axios.post(`http://localhost:3000/user`,
      {
        username: username,
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value,
        height: {
          foot: height_ft.value,
          inch: height_in.value,
        },
        dietaryGoals: dietary_goals.value,
        dietaryRestrictions: dietary_restrictions.value,
        healthComplications: health_complications.value,
      })
      .then(() => usernameEntry(username))
      .catch(err => console.log('Error frontend POST: ', err));
  };


  useEffect(() => {
    usernameEntry(username);
  }, [username]);


  return (
    <div>
      {!username && !userInformation &&
      <FrontPage usernameEntry={usernameEntry} />}

      {username && !userInformation &&
      <Personalization username={username} infoUpdate={userInfoUpdate} />}

      {username && userInformation &&
      <UserPage userInfo={userInformation}/>}
    </div>
  );
};

export default App;
