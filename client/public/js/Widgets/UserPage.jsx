import React, { useState, useEffect, useRef } from 'react';
import DataCapture from './AddData/DataCapture.jsx';
import DailyDataList from './DailyData/DailyDataList.jsx';
import DailyMealsList from './DailyData/DailyMealsList.jsx';
import InputMeals from './AddData/InputMeals.jsx';
import axios from 'axios';
import WeightChart from './Charts/WeightChart.jsx';
import SleepChart from './Charts/SleepChart.jsx';
import ExerciseChart from './Charts/ExerciseChart.jsx';

const UserPage = ({ userInfo, returnBtn }) => {
  const [infoPage, setInfoPage] = useState(true);
  const [addData, setAddData] = useState(false);
  const [addMeals, setAddMeals] = useState(false);
  const [weightChart, setWeightChart] = useState(false);
  const [sleepChart, setSleepChart] = useState(false);
  const [exerciseChart, setExerciseChart] = useState(false);
  const [currentUserInfo, setCurrentUserInfo] = useState([]);
  const [currentUserMeal, setCurrentUserMeal] = useState([]);
  const [showUserData, setShowUserData] = useState(true);
  const [showUserMeals, setShowUserMeals] = useState(false);

  const { username, firstName, lastName, age, height, dietaryGoals, dietaryRestrictions, healthComplications } = userInfo;




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
            Today's Date: {moment(new Date()).format('dddd, MMMM D, Y')}
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
            <div>
              <h4>See charts</h4>
              <button onClick={() => {
                setWeightChart(!weightChart);
                setSleepChart(false);
                setExerciseChart(false);
              }}>Weight</button>
              <button onClick={() => {
                setSleepChart(!sleepChart);
                setWeightChart(false);
                setExerciseChart(false);
              }}>Sleep</button>
              <button onClick={() => {
                setExerciseChart(!exerciseChart);
                setWeightChart(false);
                setSleepChart(false);
              }}>Exercise</button>

              {weightChart && <WeightChart currentUserInfo={currentUserInfo} />}
              {sleepChart && <SleepChart currentUserInfo={currentUserInfo} />}
              {exerciseChart && <ExerciseChart currentUserInfo={currentUserInfo} />}

              <DailyDataList currentUserInfo={currentUserInfo} />
            </div>
          }
          {showUserMeals &&
            <DailyMealsList currentUserMeal={currentUserMeal} />
          }

        </div>
      }


      {addData &&
        <DataCapture handleDataInput={handleDataInput} handleReturnBtn={handleReturnBtn} />}
      {addMeals &&
        <InputMeals handleReturnBtn={handleReturnBtn} username={username} />}
    </div>
  );
};

export default UserPage;
