import { connect } from 'react-redux';
import SimpleTable from './Table';

const mapStateToProps = (state) => ({
  expenses: state.expenses
});

export default connect(mapStateToProps)(SimpleTable);
