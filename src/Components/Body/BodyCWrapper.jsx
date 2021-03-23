import React from 'react';
import Body from './Body';

class BodyCWrapper extends React.Component {
  componentDidMount() {
    this.props.setCurList();
    if (this.props.expenses.length !== 0) {
      this.props.calcTotalUSD();
    }
  }
  render() {
    return <Body />;
  }
}

export default BodyCWrapper;
