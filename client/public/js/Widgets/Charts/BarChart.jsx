import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['11/11', '11/12', '11/13', '11/14'],
  datasets: [
    {
      label: 'Dataset 1',
      data: ['2', '4', '3', 6],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: ['1', '5', 0, 7],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const BarChart = () => {



  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default BarChart;
