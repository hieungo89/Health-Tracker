import React from 'react';

const DailyData = ({ eachUserData }) => {
  const { sleep, weight, exercise, date } = eachUserData;

  return (
    <tr>
      <td>
        {moment(date).format('dddd, MMMM D, Y')}
      </td>
      <td>
        {sleep.sleep_hr} hrs {sleep.sleep_min} mins.
      </td>
      <td>
        {exercise.exercise_hr} hrs {exercise.exercise_min} mins.
      </td>
      <td>
        {weight.weightData}lb
      </td>
      <td>
        {weight.weightTime}
      </td>
    </tr>
  );
};

export default DailyData;
