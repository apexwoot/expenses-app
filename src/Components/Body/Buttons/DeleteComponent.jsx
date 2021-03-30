import React from 'react';
import BodyButtonComponent from '../BodyButtonComponent/BodyButton';
import InputComponent from '../Inputs/InputComponent';

const DeleteComponent = props => {
  const [state, setState] = React.useState({
    inputValue: '',
  });
  const handleChange = e => {
    setState({
      inputValue: e.target.value,
    });
  };

  const handleClick = () => {
    if (props.expenses.map(e => e.date).includes(state.inputValue)) {
      props.delete(state.inputValue);
      alert(`Item created on ${state.inputValue} deleted`);
    } else {
      alert(`No item created on '${state.inputValue}'`);
    }
    state.inputValue = '';
  };
  return (
    <div>
      <InputComponent val='Exp Date' handleChange={handleChange} type='date' value={state.inputValue} />
      {/* <input onChange={handleChange} value={state.inputValue}></input> */}
      <BodyButtonComponent disabled={!state.inputValue} handleClick={handleClick} title={'Delete'} />
    </div>
  );
};

export default DeleteComponent;
