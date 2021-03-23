import { connect } from 'react-redux';
import { calcTotalUSD, setCurrensiesListThunk } from '../../redux/expenses-reducer';
import BodyCWrapper from './BodyCWrapper';

const mapStateToProps = (state) => ({
  expenses: state.expenses
});

export default connect(mapStateToProps, { calcTotalUSD, setCurList: setCurrensiesListThunk })(BodyCWrapper);
