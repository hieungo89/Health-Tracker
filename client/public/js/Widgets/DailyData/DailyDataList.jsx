import React from 'react';
import DailyData from './DailyData.jsx';

const DailyDataList = ({ currentUserInfo }) => (
  <div>
    <br />
    <h4>DAILY DATA LIST</h4>

    {currentUserInfo.map(data => { return <DailyData eachUserData={data} key={data._id} /> })}
  </div>
);

export default DailyDataList;
