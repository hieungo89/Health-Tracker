import React from 'react';

const Food = ({ food, handleRemove }) => (
  <>
    {food.searchString} &nbsp; <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemove(food)}>X</button> <br/>
  </>
);

export default Food;
