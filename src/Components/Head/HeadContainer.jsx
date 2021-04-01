import { connect } from 'react-redux';
import { calcTotalUSD, setCurrensiesListThunk } from '../../redux/expenses-reducer';
import HeadClassComponent from './HeadClassComponent';

const mapStateToProps = state => ({
  expenses: state.expenses,
});

export default connect(mapStateToProps, { calcTotalUSD, setCurList: setCurrensiesListThunk })(HeadClassComponent);
