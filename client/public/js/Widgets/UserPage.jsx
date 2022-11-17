import React, { useState, useEffect, useRef } from 'react';
import DataCapture from './AddData/DataCapture.jsx';
import DailyData from './DailyData/DailyData.jsx';
import InputMeals from './AddData/InputMeals.jsx';
import axios from 'axios';

const UserPage = ({ userInfo }) => {
  const [infoPage, setInfoPage] = useState(true);
  const [addData, setAddData] = useState(false);
  const [addMeals, setAddMeals] = useState(false);
  const [currentUserInfo, setCurrentUserInfo] = useState([]);
  // const dataRef = useRef({})

  const date = new Date();
  const { username, firstName, lastName, age, height, dietaryGoals, dietaryRestrictions, healthComplications } = userInfo;

  // POST weight, sleep, exercise to DB, then set Page back to InfoPage
  const handleDataInput = (data) => {
    data.preventDefault();
    console.log('handleDatainput: ', data.target)
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

    axios.post('http://localhost:3000/userData', dataParams)
      .then(() => {
        data.target.reset();
        setInfoPage(true);
        setAddData(false);
      })
      .catch(err => console.log('input process issue: ', err));
  };

  // Return to InfoPage
  const handleReturnBtn = () => {
    setInfoPage(true);
    setAddMeals(false);
    setAddData(false);
  };

  // GET Data from DB
  useEffect(() => {
    axios.get('http://localhost:3000/userData', { params: { username } })
      .then(result => setCurrentUserInfo(result.data))
  }, []);

  // console.log('userInfo**********');
  // console.log(currentUserInfo);

  return (
    <div>
      {infoPage && !addData &&
        <div>
          <h2> Hi {firstName}!</h2>
          <h4>
            Today's Date: {date.toDateString()}
          </h4>

          <br /> <br />
          <button onClick={() => { setAddData(true); setInfoPage(false) }}>Add data</button> &nbsp;
          <button onClick={() => { setAddMeals(true); setInfoPage(false) }}>Add Meals</button>
          <br /> <br />

          <DailyData currentUserInfo={currentUserInfo} />
        </div>
      }


      {!infoPage && addData &&
      <DataCapture handleDataInput={handleDataInput} handleReturnBtn={handleReturnBtn}/>}
      {!infoPage && addMeals &&
      <InputMeals handleReturnBtn={handleReturnBtn} username={username} />}
    </div>
  );
};

export default UserPage;
