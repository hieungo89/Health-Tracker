import React, { useState, useEffect } from 'react';
import LineChart from './LineChart.jsx';

const SleepChart = ({ currentUserInfo }) => {
  const [labels, setLabels] = useState([]);
  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    let labelsContainer = [];
    let dataContainer = [];
    currentUserInfo.map(data => {
      labelsContainer.push(moment(data.date).format('l'));
      dataContainer.push(data.sleep.sleep_hr + data.sleep.sleep_min/60);
    })
    setLabels(labelsContainer);
    setDataInfo(dataContainer);
  }, [currentUserInfo]);

  return (
    <div>
      <LineChart
        title={'Your Sleep Data'}
        dataLabel={'Sleep in Hours'}
        labels={labels}
        dataInfo={dataInfo}
      />
    </div>
  );
};

export default SleepChart;
