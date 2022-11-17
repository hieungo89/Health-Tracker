import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import FrontPage from './Widgets/FrontPage.jsx';
import Personalization from './Widgets/Personalization/Personalization.jsx';
import UserPage from './Widgets/UserPage.jsx';

const App = () => {
  const [username, setUsername] = useState();
  const [userInformation, setUserInformation] = useState();

  // const usernameEntry = (name) => {
  //   name.preventDefault();
  //   setUsername(name.target.username.value);
  // }

  const usernameEntry = async (name) => {
    name.preventDefault();
    const profileName = name.target.username.value;

    axios.get(`http://localhost:3000/healthTracker`, { params: { username: profileName } })
      .then(result => {
        console.log('~~~~ USERNAME RETRIEVAL ~~~~ ', result.data);
        if (result.data) {
          setUsername(profileName);
          setUserInformation(result.data);
        } else {
          setUsername(profileName) }
      })
      .catch(err => console.log('Error backend GET: ', err));
  };

  const userInfoUpdate = (data) => {
    data.preventDefault();
    const { firstName, lastName, age, height_ft, height_in, dietary_goals, dietary_restrictions, health_complications } = data.target;
    const dataParams = {
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
    }

    axios.post(`http://localhost:3000/healthTracker`, dataParams)
      .then(() => usernameEntry(username))
      .catch(err => console.log('Error frontend POST: ', err));
  };


  useEffect(() => {
    console.log('username: ', username)
    console.log('info: ', userInformation);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  }, [username]);


  return (
    <div>
      {!username && !userInformation &&
        <FrontPage usernameEntry={usernameEntry} />}

      {username && !userInformation &&
        <Personalization username={username} infoUpdate={userInfoUpdate} />}

      {username && userInformation &&
        <UserPage userInfo={userInformation} />}
    </div>
  );
};

export default App;
