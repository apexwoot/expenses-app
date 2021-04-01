import React from 'react';
import Head from './Head';

class HeadClassComponent extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.setCurList();
    if (this.props.expenses.length !== 0) {
      this.props.calcTotalUSD();
    }
  }
  render() {
    return <Head />;
  }
}

export default HeadClassComponent;
