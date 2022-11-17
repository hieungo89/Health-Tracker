import React from 'react';

const DailyData = ({ currentUserInfo }) => {
  if (currentUserInfo.length === 0) { return null; }

  const { sleep, weight, exercise, date } = currentUserInfo;

  return (
    <div>
      <h1>Daily Data:</h1>
      <br /><br />

      <p>
        On {date}:
        <br /><br />
        Total hours of sleep: {sleep.sleep_hr} hrs {sleep.sleep_min} mins
        <br /><br />
        Total hours of exercise: {exercise.exercise} hrs {exercise.exercise_min} mins
        <br /><br />
        Latest Weight taken on is {weight.weightData} taken at {weight.weightTime}
      </p>

    </div>
  );
};

export default DailyData;
