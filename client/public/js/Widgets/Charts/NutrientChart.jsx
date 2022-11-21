import React, { useState, useEffect } from 'react';
import LineChart from './LineChart.jsx';

const NutrientChart = ({ currentUserMeal, keyword }) => {
  const [labels, setLabels] = useState([]);
  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    let labelsContainer = [];
    let dataContainer = [];
    currentUserMeal.map(data => {
      if (labelsContainer[labelsContainer.length - 1] !== moment(data.date).format('l')) {
        labelsContainer.push(moment(data.date).format('l'));
      }
    });

    for (let i = 0; i < labelsContainer.length; i++) {
      let total = 0;
      currentUserMeal.filter(item => {
        if (labelsContainer[i] === moment(item.date).format('l') && item.nutrientCount[keyword]) {
          total += item.nutrientCount[keyword].quantity;
        }
      })
      dataContainer.push(total.toFixed(2));
    }
    setLabels(labelsContainer);
    setDataInfo(dataContainer);
  }, [currentUserMeal, keyword]);

  return (
    <div>
      <LineChart
        title={`Daily ${keyword} consumptions`}
        dataLabel={keyword + ' / ' + currentUserMeal[0].nutrientCount[`${keyword}`].unit}
        labels={labels}
        dataInfo={dataInfo}
      />
    </div>
  );
};

export default NutrientChart;
