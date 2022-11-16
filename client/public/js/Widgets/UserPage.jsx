import React, { useState } from 'react';
import DataCapture from './DailyData/DataCapture.jsx';

const UserPage = ({ userInfo }) => {
  const [infoPage, setInfoPage] = useState(true);
  const [addData, setAddData] = useState(false);
  const date = new Date();

  const { username, firstName, lastName, age, height, dietaryGoals, dietaryRestrictions, healthComplications } = userInfo;
  // console.log('user info in user page: ', userInfo)

  return (
    <div>
      {infoPage &&  !addData && <div>

        <h2> Hi {firstName}!</h2>
        <h4>
          Today's Date: {date.toDateString()}
        </h4>


        <br /> <br />

        <button onClick={() => {
          setAddData(true);
          setInfoPage(false)
        }}>Add data</button>

        <br /> <br />

        <div>
          Your Data: <br />
        </div>
      </div>
      }


      {!infoPage && addData && <DataCapture />}
    </div>
  );
};

export default UserPage;
