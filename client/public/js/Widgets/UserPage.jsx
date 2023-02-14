import React, { useState, useEffect } from 'react';
import DataCapture from './AddData/DataCapture.jsx';
import DailyDataList from './DailyData/DailyDataList.jsx';
import DailyMealsList from './DailyData/DailyMealsList.jsx';
import InputMeals from './AddData/InputMeals.jsx';
import axios from 'axios';
import WeightChart from './Charts/WeightChart.jsx';
import SleepChart from './Charts/SleepChart.jsx';
import ExerciseChart from './Charts/ExerciseChart.jsx';
import NutrientChart from './Charts/NutrientChart.jsx';

const UserPage = ({ userInfo, returnBtn }) => {
  const [infoPage, setInfoPage] = useState(true);
  const [addData, setAddData] = useState(false);
  const [addMeals, setAddMeals] = useState(false);
  const [weightChart, setWeightChart] = useState(false);
  const [sleepChart, setSleepChart] = useState(false);
  const [exerciseChart, setExerciseChart] = useState(false);
  const [currentUserInfo, setCurrentUserInfo] = useState([]);
  const [currentUserMeal, setCurrentUserMeal] = useState([]);
  const [showUserData, setShowUserData] = useState(false);
  const [showUserMeals, setShowUserMeals] = useState(false);
  const [nutrientKeyword, setNutrientKeyword] = useState('');

  const { username, firstName, lastName, age, height, dietaryGoals, dietaryRestrictions, healthComplications } = userInfo;
  const nutrientsData = ['calories', 'fat', 'carbohydrate', 'protein', 'cholesterol', 'fiber', 'sodium', 'sugar'];

  // ADD USER DATA TO DB, RETURN TO INFO PAGE
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

  // HANDLE CLICK FOR DATA CHARTS
  const handleUserDataClick = (e) => {
    if (!e) {
      setExerciseChart(false);
      setWeightChart(false);
      setSleepChart(false);
    } else if (e.target.textContent === 'Weight') {
      setWeightChart(!weightChart);
      setSleepChart(false);
      setExerciseChart(false);
    } else if (e.target.textContent === 'Sleep') {
      setSleepChart(!sleepChart);
      setWeightChart(false);
      setExerciseChart(false);
    } else if (e.target.textContent === 'Exercise') {
      setExerciseChart(!exerciseChart);
      setWeightChart(false);
      setSleepChart(false);
    }
  };

  // CHANGE CHART TO SPECIFIC NUTRIENT
  const handleNutrientBtnClick = (e) => {
    if (!currentUserMeal.length) return;
    if (!e) {
      setNutrientKeyword('');
    } else {
      setNutrientKeyword(e.target.textContent);
    }
  }

  // RETRIEVE INITIAL DATA FROM USER DB
  useEffect(() => {
    const params = { params: { username } };
    axios.get('http://localhost:3000/userData', params)
      .then(result => setCurrentUserInfo(result.data));
    axios.get('http://localhost:3000/userMeal', params)
      .then(result => setCurrentUserMeal(result.data));
  }, [infoPage]);

  return (
    <div className="user-page">
      {infoPage && !addData &&
        <div>
          <div className="row">
            <div className="col">
              <h2> Hi {firstName}!</h2>
            </div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col">
              <button className="btn btn-outline-dark btn-sm" onClick={returnBtn}>Switch user</button>
            </div>
          </div>
          <h4>
            Today's Date: {moment(new Date()).format('dddd, MMMM D, Y')}
          </h4>
          <p>
            My Dietary Goals: {dietaryGoals} <br />
            My Dietary Restrictions: {dietaryRestrictions} <br />
            Any Health Complications: {healthComplications} <br />
            Age: {age} &nbsp; Height: {height.foot}ft. {height.inch}in.
          </p>

          <br />
          <button className="btn btn-primary" onClick={() => { setAddData(true); setInfoPage(false) }}>Add Data</button> &nbsp;
          <button className="btn btn-primary" onClick={() => { setAddMeals(true); setInfoPage(false) }}>Add Meals</button>
          <br /> <br />

          <h4>See your Progress:</h4>
          <button className="btn btn-info" onClick={() => {
            setShowUserData(!showUserData);
            handleUserDataClick();
            setShowUserMeals(false);
          }}>Daily Exercise/Sleep/Weight</button> &nbsp;
          <button className="btn btn-info" onClick={() => {
            setShowUserMeals(!showUserMeals);
            handleNutrientBtnClick();
            setShowUserData(false);
          }}>Daily Meals</button>

          {showUserData &&
            <div>
              <br />
              <h4>See charts</h4>
              <p>
                <button className="btn btn-outline-dark btn-sm" onClick={() => handleUserDataClick()}>close chart</button>
              </p>
              <button className="btn btn-outline-success" onClick={(e) => handleUserDataClick(e)}>Weight</button> &nbsp;
              <button className="btn btn-outline-success" onClick={(e) => handleUserDataClick(e)}>Sleep</button>&nbsp;
              <button className="btn btn-outline-success" onClick={(e) => handleUserDataClick(e)}>Exercise</button>

              {weightChart && <WeightChart currentUserInfo={currentUserInfo} />}
              {sleepChart && <SleepChart currentUserInfo={currentUserInfo} />}
              {exerciseChart && <ExerciseChart currentUserInfo={currentUserInfo} />}
              <DailyDataList currentUserInfo={currentUserInfo} />
            </div>
          }

          {showUserMeals &&
            <div> <br />
              <h4>
                See Charts
              </h4>
              <p>
                <button className="btn btn-outline-dark btn-sm" onClick={() => setNutrientKeyword('')}>close chart</button>
              </p>
              {nutrientsData.map(data => { return <button className="btn btn-outline-success" onClick={(e) => handleNutrientBtnClick(e)} key={data}>{data}</button> })}

              {nutrientKeyword &&
                <NutrientChart currentUserMeal={currentUserMeal} keyword={nutrientKeyword} />
              }
              <DailyMealsList currentUserMeal={currentUserMeal} nutrientsData={nutrientsData} />
            </div>
          }
        </div>
      }

      {addData &&
        <DataCapture handleDataInput={handleDataInput} handleReturnBtn={handleReturnBtn} />
      }
      {addMeals &&
        <InputMeals handleReturnBtn={handleReturnBtn} username={username} nutrientsData={nutrientsData} />
      }
    </div>
  );
};

export default UserPage;
