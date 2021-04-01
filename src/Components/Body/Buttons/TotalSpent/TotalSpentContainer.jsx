import { connect } from 'react-redux';
import { calcTotalInDesiredCurrencyThunk, currencyInputOnChange } from '../../../../redux/expenses-reducer';
import TotalSpent from './TotalSpent';

const mapStateToProps = state => ({
  state: state,
});

export default connect(mapStateToProps, {
  currencyInputOnChange: currencyInputOnChange,
  calcTotalInDesiredCur: calcTotalInDesiredCurrencyThunk,
})(TotalSpent);
