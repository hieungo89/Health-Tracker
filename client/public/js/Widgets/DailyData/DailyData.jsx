import React from 'react';

const DailyData = ({ eachUserData }) => {
  const { sleep, weight, exercise, date } = eachUserData;

  return (
    <div>
      <br />
      <p>
        Date: {date}
        <br /><br />
        Total hours of sleep: {sleep.sleep_hr} hrs {sleep.sleep_min} mins.
        <br />
        Total hours of exercise: {exercise.exercise_hr} hrs {exercise.exercise_min} mins.
        <br />
        Latest Weight taken on is {weight.weightData}lb, taken at {weight.weightTime}.
      </p>
    </div>
  );
};

export default DailyData;
