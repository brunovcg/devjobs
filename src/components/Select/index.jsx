import React, { Component } from 'react'

const Select = ({options, register}) => {
  return (
    <select name="lingua" {...register}>
      {options.map((option)=>
        <option value={option}>{option}</option>)}
    </select>
  );
};
export default Select;

