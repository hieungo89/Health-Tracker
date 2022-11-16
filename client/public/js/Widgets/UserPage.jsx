import React, { useState, useEffect } from 'react';
import DataCapture from './AddData/DataCapture.jsx';
import DailyData from './DailyData/DailyData.jsx';
import axios from 'axios';

const UserPage = ({ userInfo }) => {
  const [infoPage, setInfoPage] = useState(true);
  const [addData, setAddData] = useState(false);
  const [currentUserInfo, setCurrentUserInfo] = useState([]);
  const date = new Date();

  const { username, firstName, lastName, age, height, dietaryGoals, dietaryRestrictions, healthComplications } = userInfo;
  // console.log('user info in user page: ', userInfo)

  const handleDataInput = (data) => {
    data.preventDefault();
    const dataParams = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      date: data.target.date.value,
      weight: {
        weightData: data.target.weight.value,
        weightTime: data.target.weight_time.value,
      },
      sleep: {
        sleep_hr: data.target.sleep_hr.value,
        sleep_min: data.target.sleep_min.value,
      },
      exercise: {
        exercise_hr: data.target.exercise_hr.value,
        exercise_min: data.target.exercise_min.value,
      },
    }
    console.log('dataParams -------------')
    console.log(dataParams)

    axios.post('http://localhost:3000/userData', dataParams)
      .catch(err => console.log('input process issue ----------', err));
  };


  useEffect(() => {
    axios.get('http://localhost:3000/userData', { params: { username } })
      .then(result => setCurrentUserInfo(result.data))

  }, []);

  console.log('userInfo**********');
  console.log(currentUserInfo);

  return (
    <div>
      {infoPage && !addData &&
        <div>
          <h2> Hi {firstName}!</h2>
          <h4>
            Today's Date: {date.toDateString()}
          </h4>

          <br /> <br />
          <button onClick={() => { setAddData(true); setInfoPage(false) }}>Add data</button>
          <br /> <br />

          <DailyData />
        </div>
      }


      {!infoPage && addData && <DataCapture handleDataInput={handleDataInput} />}
    </div>
  );
};

export default UserPage;
