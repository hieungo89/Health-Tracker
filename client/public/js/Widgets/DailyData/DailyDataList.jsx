import React, { useState } from 'react';
import DailyData from './DailyData.jsx';

const DailyDataList = ({ currentUserInfo }) => {
  const [query, setQuery] = useState('');

  const filteredItems = currentUserInfo.filter(item => {
    if (
      moment(item.date).format('dddd, MMMM D, Y').toLowerCase().includes(query.toLowerCase())) return item;
  });

  return (
    <div className="data-container">
      <div className="data-title">
        <h4>DAILY DATA LIST</h4>
        Search:
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      <br/>

      <div class="table-responsive">
        <table class="table table-striped table-hover table-bordered">
          <thead>
            <tr class="table-primary">
              <th>Date</th>
              <th>Hours of Sleep</th>
              <th>Hours of Exercise</th>
              <th>Weight</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {filteredItems.map(data => { return <DailyData eachUserData={data} key={data._id} /> })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DailyDataList;
