import { connect } from 'react-redux';
import { createExpenseThunk } from '../../../../redux/expenses-reducer';
import AddComponent from './AddComponent';

export default connect(null, { addExpense: createExpenseThunk })(AddComponent);
