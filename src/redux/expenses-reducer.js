import { getRateData, getCurList } from '../curApi/app';

const SET_EXPENSES = 'SET-EXPENSES';
const ADD_EXPENSE = 'ADD_EXPENSE';
const DELETE_EXPENSE = 'DELETE-EXPENSE';
const SET_CURRENCIES_LIST = 'SET-CURRENCIES-LIST';
const CALC_TOTAL_USD = 'CALC-TOTAL-USD';
const CURRENCY_INPUT_ONCHANGE = 'CURRENCY-INPUT-ONCHANGE';
const CALC_TOTAL_IN_DESIRED_CURRENCY = 'CALC-TOTAL-IN-DESIRED-CURRENCY';
const SET_LAST_CHOSEN_CURRENCY = 'SET-LAST-CHOSEN-CURRENCY';

const initialState = {
  expenses: [
    { date: '2021-02-02', amount: 15.99, currency: 'USD', name: 'Bread', usdAmount: 15.99 },
    { date: '2021-03-12', amount: 12.54, currency: 'USD', name: 'Other', usdAmount: 12.54 },
    { date: '2021-03-20', amount: 10, currency: 'UAH', name: 'Eggs', usdAmount: 0.36 },
    { date: '2021-03-21', amount: 100, currency: 'GBP', name: 'Headphones', usdAmount: 138.7 },
  ],
  currenciesList: [],
  totalUSD: null,
  lastDesiredCurrency: null,
  lastTotalInDesiredCurrency: null,
  fields: {
    currencyInputField: '',
  },
};

const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXPENSES:
      return { ...state, expenses: [...action.state] };
    case ADD_EXPENSE:
      return { ...state, expenses: [...state.expenses, action.expense] };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(e => e.date !== action.date),
      };
    case SET_CURRENCIES_LIST:
      return {
        ...state,
        currenciesList: action.curList,
      };
    case CALC_TOTAL_USD:
      return {
        ...state,
        totalUSD: state.expenses.map(e => e.usdAmount).reduce((a, b) => a + b),
      };
    case CALC_TOTAL_IN_DESIRED_CURRENCY:
      return {
        ...state,
        lastTotalInDesiredCurrency: action.rate * state.totalUSD,
      };
    case CURRENCY_INPUT_ONCHANGE:
      return {
        ...state,
        fields: { currencyInputField: action.input },
      };
    case SET_LAST_CHOSEN_CURRENCY:
      return {
        ...state,
        lastDesiredCurrency: action.cur,
      };
    default:
      return state;
  }
};

export const setExpenses = state => ({ type: SET_EXPENSES, state: state });
export const addExpense = expense => ({ type: ADD_EXPENSE, expense: expense });
export const deleteExpense = date => ({ type: DELETE_EXPENSE, date: date });
export const setCurList = curList => ({ type: SET_CURRENCIES_LIST, curList: curList });
export const calcTotalUSD = () => ({ type: CALC_TOTAL_USD });
export const currencyInputOnChange = input => ({ type: CURRENCY_INPUT_ONCHANGE, input: input });
export const setLastChosenCurrency = cur => ({ type: SET_LAST_CHOSEN_CURRENCY, cur: cur });

export const calcTotalInDesiredCur = desiredCurRate => ({
  type: CALC_TOTAL_IN_DESIRED_CURRENCY,
  rate: desiredCurRate,
});
export const calcTotalInDesiredCurrencyThunk = desiredCurr => {
  return dispatch => {
    getRateData('USD', desiredCurr).then(rate => {
      dispatch(calcTotalInDesiredCur(rate));
      dispatch(setLastChosenCurrency(desiredCurr.toUpperCase()));
    });
  };
};
export const createExpenseThunk = obj => {
  return dispatch => {
    getRateData(obj.currency).then(rate => {
      obj.usdAmount = Math.floor(obj.amount * rate * 100) / 100;
      dispatch(addExpense(obj));
      dispatch(calcTotalUSD());
    });
  };
};
export const setCurrensiesListThunk = () => {
  return dispatch => {
    getCurList().then(list => {
      dispatch(setCurList(list));
    });
  };
};

export default expensesReducer;
