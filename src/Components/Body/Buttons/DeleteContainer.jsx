import { connect } from 'react-redux';
import { deleteExpense } from '../../../redux/expenses-reducer';
import DeleteComponent from './DeleteComponent';

const mapStateToProps = state => ({
  expenses: state.expenses,
});

export default connect(mapStateToProps, { delete: deleteExpense })(
  DeleteComponent
);
