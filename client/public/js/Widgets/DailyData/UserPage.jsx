import React from 'react';

const UserPage = () => {
  const date = new Date();

  // // Get year, month, and day part from the date
  // var year = date.toLocaleString("default", { year: "numeric" });
  // var month = date.toLocaleString("default", { month: "2-digit" });
  // var day = date.toLocaleString("default", { day: "2-digit" });

  // // Generate yyyy-mm-dd date string
  // var formattedDate = month + "/" + day + "/" + year;
  // console.log(formattedDate);

  return (
    <div>
      <h4>
        Today's Date: {date.toDateString()}
      </h4>

      <br /> <br />

      <button>Add data</button>

      <br /> <br />

      <div>
        Your Data: <br />
      </div>


    </div>
  );
};

export default UserPage;
