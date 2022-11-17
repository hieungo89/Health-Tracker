import React, { useState, useEffect, useRef } from 'react';
import DataCapture from './AddData/DataCapture.jsx';
import DailyDataList from './DailyData/DailyDataList.jsx';
import DailyMealsList from './DailyData/DailyMealsList.jsx';
import InputMeals from './AddData/InputMeals.jsx';
import axios from 'axios';
import { Chart } from 'chart.js/auto';

const UserPage = ({ userInfo, returnBtn }) => {
  const [infoPage, setInfoPage] = useState(true);
  const [addData, setAddData] = useState(false);
  const [addMeals, setAddMeals] = useState(false);
  const [currentUserInfo, setCurrentUserInfo] = useState([]);
  const [currentUserMeal, setCurrentUserMeal] = useState([]);
  const [showUserData, setShowUserData] = useState(false);
  const [showUserMeals, setShowUserMeals] = useState(false);

  const date = new Date();
  const { username, firstName, lastName, age, height, dietaryGoals, dietaryRestrictions, healthComplications } = userInfo;

  const userInfoChart = {
    type: 'line',
    data: {
      datasets: [{
        data: [{ x: 10, y: 20 }, { x: 15, y: null }, { x: 20, y: 10 }]
      }]
    }
  };






  // ADD USER DATA TO DB, RETURN TO INFO PAGE
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

  // RETURN BTN TO INFO PAGE
  const handleReturnBtn = () => {
    setInfoPage(true);
    setAddMeals(false);
    setAddData(false);
  };

  // RETRIEVE INITIAL DATA FROM USER DB
  useEffect(() => {
    const params = { params: { username } };
    axios.get('http://localhost:3000/userData', params)
      .then(result => setCurrentUserInfo(result.data));
    axios.get('http://localhost:3000/userMeal', params)
      .then(result => setCurrentUserMeal(result.data));
  }, [infoPage]);

  // LOGGING CHANGES IN INFO AND MEAL
  useEffect(() => {
    console.log("~~~~ USER INFO & MEALS ~~~~");
    console.log(currentUserInfo);
    console.log(currentUserMeal);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  }, [currentUserInfo, currentUserMeal])






  return (
    <div>
      {infoPage && !addData &&
        <div>
          <h2> Hi {firstName}!</h2>
          <button onClick={returnBtn}>Switch user</button>
          <h4>
            Today's Date: {date.toDateString()}
          </h4>

          <br /> <br />
          <button onClick={() => { setAddData(true); setInfoPage(false) }}>Add data</button> &nbsp;
          <button onClick={() => { setAddMeals(true); setInfoPage(false) }}>Add Meals</button>
          <br /> <br />

          <h4>See your Progress:</h4>
          <button onClick={() => {
            setShowUserData(!showUserData);
            setShowUserMeals(false);
          }}>Daily Exercise/Sleep/Weight</button> &nbsp;
          <button onClick={() => {
            setShowUserMeals(!showUserMeals);
            setShowUserData(false);
          }}>Daily Meals</button>


          {showUserData &&
            <DailyDataList currentUserInfo={currentUserInfo} />}
          {showUserMeals &&
            <DailyMealsList currentUserMeal={currentUserMeal} />}

        </div>
      }


      {!infoPage && addData &&
        <DataCapture handleDataInput={handleDataInput} handleReturnBtn={handleReturnBtn} />}
      {!infoPage && addMeals &&
        <InputMeals handleReturnBtn={handleReturnBtn} username={username} />}
    </div>
  );
};

export default UserPage;
