import React from 'react';
import BodyButtonComponent from '../../BodyButtonComponent/BodyButton';
import InputComponent from '../../Inputs/InputComponent';

const TotalSpent = props => {
  const handleChange = e => {
    const val = e.target.value;
    props.currencyInputOnChange(val);
  };
  console.log(props.state);
  //ui is waiting for async request so there is a delay of showing the amount
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
        <div>
          {props.state.lastTotalInDesiredCurrency ? (
            <div className='total-result-wrapper'>
              <span>{`TOTAL: ${props.state.lastTotalInDesiredCurrency?.toFixed(2)} ${
                props.state.lastDesiredCurrency
              }`}</span>
            </div>
          ) : (
            <div></div>
          )}
          <div className='total-button-wrapper'>
            <BodyButtonComponent disabled={false} handleClick={() => showTotal()} title='Show Result' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TotalSpent;
