import React from 'react';

const SimpleTable = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Currency</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {props.expenses.map(({ date, amount, currency, name }) => (
          <tr key={name}>
            <td>{date}</td>
            <td>{amount}</td>
            <td>{currency}</td>
            <td>{name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default SimpleTable;
