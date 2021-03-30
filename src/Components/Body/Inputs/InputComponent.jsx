import React from 'react';

const InputComponent = ({ val, handleChange, value, type }) => {
  return (
    <div className='input-container'>
      <label>{val.toUpperCase().split('I')[0]}: </label>
      <input id={val} type={type} name={val} onChange={handleChange} value={value} />
    </div>
  );
};

export default InputComponent;
