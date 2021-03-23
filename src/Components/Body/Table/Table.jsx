import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    overflow: 'auto',
    flexDirection: 'column'
  }
}));

const SimpleTable = (props) => {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table className={classes.root}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Currency</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.expenses.map(({ date, amount, currency, name }) => (
            <TableRow key={date}>
              <TableCell>{date}</TableCell>
              <TableCell>{amount}</TableCell>
              <TableCell>{currency}</TableCell>
              <TableCell>{name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
