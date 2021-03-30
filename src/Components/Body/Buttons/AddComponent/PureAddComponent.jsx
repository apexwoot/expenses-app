import React from 'react';
import InputComponent from '../../Inputs/InputComponent';
import BodyButtonComponent from '../../BodyButtonComponent/BodyButton';

const PureAddComponent = ({ inputs, handleChange, state, handleClick }) => {
  return (
    <form className='input-form'>
      {inputs.map(({ val, type }) => (
        <InputComponent key={val} val={val} type={type} handleChange={handleChange} value={state[`${val}`]} />
      ))}

      <BodyButtonComponent
        disabled={!(state.amountInput && state.currInput && state.dateInput && state.nameInput)}
        handleClick={handleClick}
        title='Add Expense'
      />
    </form>
  );
};

export default PureAddComponent;
