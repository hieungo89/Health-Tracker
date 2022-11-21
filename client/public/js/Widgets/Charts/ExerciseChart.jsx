import React, { useState, useEffect } from 'react';
import LineChart from './LineChart.jsx';

const ExerciseChart = ({ currentUserInfo }) => {
  const [labels, setLabels] = useState([]);
  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    let labelsContainer = [];
    let dataContainer = [];
    currentUserInfo.map(data => {
      labelsContainer.push(moment(data.date).format('l'));
      dataContainer.push((data.exercise.exercise_hr * 60) + data.exercise.exercise_min);
    })
    setLabels(labelsContainer);
    setDataInfo(dataContainer);
  }, [currentUserInfo]);

  return (
    <div>
      <LineChart
        title={'Your Exercise Data'}
        dataLabel={'Exercise in minutes'}
        labels={labels}
        dataInfo={dataInfo}
      />
    </div>
  );
};

export default ExerciseChart;
