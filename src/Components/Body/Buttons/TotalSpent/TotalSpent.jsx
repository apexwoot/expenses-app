import React from 'react';
import InputComponent from '../../Inputs/InputComponent';

const TotalSpent = props => {
  const handleChange = e => {
    const val = e.target.value;
    props.currencyInputOnChange(val);
  };
  const showTotal = () => {
    props.state.currenciesList.includes(props.state.fields.currencyInputField.toUpperCase())
      ? props.calcTotalInDesiredCur(props.state.fields.currencyInputField)
      : alert('No such currency!');
  };

  return (
    <div>
      <div>
        <InputComponent
          val='Type Curr'
          handleChange={handleChange}
          value={props.state.fields.currencyInputField}
          type='text'
        />
        {/* <input id='filled-required' onChange={handleChange} value={props.state.fields.currencyInputField}></input> */}
        <div>
          <button
            onClick={() => {
              showTotal();
            }}>
            Count
          </button>
        </div>

        {props.state.lastTotalInDesiredCurrency ? (
          <div>
            <span>{`Total: ${props.state.lastTotalInDesiredCurrency?.toFixed(
              2
            )} ${props.state.fields.currencyInputField.toUpperCase()}`}</span>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
export default TotalSpent;
