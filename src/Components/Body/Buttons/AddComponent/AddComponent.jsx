import React from 'react';
import PureAddComponent from './PureAddComponent';

const AddComponent = props => {
  const [state, setState] = React.useState({
    dateInput: '',
    amountInput: '',
    currInput: '',
    nameInput: '',
  });
  const handleChange = e => {
    const val = e.target.value;
    setState({
      ...state,
      [e.target.name]: val,
    });
  };
  const handleClick = e => {
    const createExpence = e => {
      e.preventDefault();
      const expense = {
        date: state.dateInput,
        amount: +state.amountInput,
        currency: state.currInput,
        name: state.nameInput,
      };
      if (new Date(expense.date) > new Date()) {
        alert('Wrong Date!');
        return (state.amountInput = state.currInput = state.dateInput = state.nameInput = '');
      }
      if (expense.amount < 0) {
        alert('Wrong Amount!');
        return (state.amountInput = state.currInput = state.dateInput = state.nameInput = '');
      }
      alert(`Expense '${state.nameInput}' added!`);

      state.amountInput = state.currInput = state.dateInput = state.nameInput = '';
      props.addExpense(expense);
    };
    createExpence(e);
  };

  const inputs = [
    { val: 'dateInput', type: 'date' },
    { val: 'currInput', type: 'text' },
    { val: 'amountInput', type: 'number' },
    { val: 'nameInput', type: 'text' },
  ];

  return (
    <div className='add-expense-container'>
      <PureAddComponent inputs={inputs} handleChange={handleChange} handleClick={handleClick} state={state} />
    </div>
  );
};

export default AddComponent;
