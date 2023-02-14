import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import FrontPage from './Widgets/FrontPage.jsx';
import Personalization from './Widgets/Personalization/Personalization.jsx';
import UserPage from './Widgets/UserPage.jsx';

const App = () => {
  const [username, setUsername] = useState();
  const [userInformation, setUserInformation] = useState();

  const usernameEntry = async (name) => {
    name.preventDefault();
    const profileName = name.target.username.value;
    axios.get(`http://localhost:3000/healthTracker`, { params: { username: profileName } })
      .then(result => {
        if (result.data) {
          setUsername(profileName);
          setUserInformation(result.data);
        } else {
          setUsername(profileName)
        }
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

  return (
    <div id="main-app" className="container">
      <div className="row">
        {!username && !userInformation &&
          <div className="col offset-1">
            <FrontPage usernameEntry={usernameEntry} />
          </div>
        }

        {username && !userInformation &&
          <div className="col">
            <Personalization username={username} infoUpdate={userInfoUpdate}
              returnBtn={() => { setUsername(); setUserInformation(); }} />
          </div>
        }

        {username && userInformation &&
          <div className="col offset-1">
            <UserPage userInfo={userInformation}
              returnBtn={() => { setUsername(); setUserInformation(); }} />
          </div>
        }
      </div>
    </div >
  );
};

export default App;
