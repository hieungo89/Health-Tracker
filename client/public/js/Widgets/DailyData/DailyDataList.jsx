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
      {filteredItems.map(data => { return <DailyData eachUserData={data} key={data._id} /> })}
    </div>
  );
};

export default DailyDataList;
