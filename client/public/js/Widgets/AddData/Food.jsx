import React from 'react';

const Food = ({ food, handleRemove }) => (
  <>
    {food.searchString} &nbsp; <button onClick={() => handleRemove(food)}>X</button>
    <br />
  </>
);

export default Food;
