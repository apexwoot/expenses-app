import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import expensesReducer from './expenses-reducer';

const store = createStore(expensesReducer, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
