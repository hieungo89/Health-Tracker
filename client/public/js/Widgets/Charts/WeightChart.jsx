import React, { useState, useEffect } from 'react';
import LineChart from './LineChart.jsx';

const WeightChart = ({ currentUserInfo }) => {
  const [labels, setLabels] = useState([]);
  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    let labelsContainer = [];
    let dataContainer = [];
    currentUserInfo.map(data => {
      labelsContainer.push(moment(data.date).format('l'));
      dataContainer.push(data.weight.weightData);
    })
    setLabels(labelsContainer);
    setDataInfo(dataContainer);
  }, [currentUserInfo]);

  return (
    <div>
      <LineChart
        title={'Your Weight Data'}
        dataLabel={'weight'}
        labels={labels}
        dataInfo={dataInfo}
      />
    </div>
  );
};

export default WeightChart;
