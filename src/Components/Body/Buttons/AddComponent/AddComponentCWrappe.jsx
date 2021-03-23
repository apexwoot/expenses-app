import { Button, Card, CardContent, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  btn: {
    marginTop: '100px'
  }
}));

const AddComponent = (props) => {
  const [state, setState] = React.useState({
    dateInput: '',
    amountInput: '',
    currInput: '',
    nameInput: ''
  });
  const handleChange = (e) => {
    const val = e.target.value;
    setState({
      ...state,
      [e.target.name]: val
    });
  };
  const createExpence = () => {
    const expense = {
      date: state.dateInput,
      amount: +state.amountInput,
      currency: state.currInput,
      name: state.nameInput
    };
    alert(`Expense '${state.nameInput}' added!`);
    state.amountInput = state.currInput = state.dateInput = state.nameInput = '';
    props.addExpense(expense);
  };
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={6}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={6}>
          <Grid key={4} item>
            <Card elevation={0}>
              <Card vatiant="outlined">
                <CardContent>
                  <TextField
                    required
                    id="dateInput"
                    label="Date"
                    name="dateInput"
                    variant="outlined"
                    onChange={handleChange}
                    value={state.dateInput}
                  ></TextField>
                </CardContent>
                <CardContent>
                  <TextField
                    required
                    id="amountInput"
                    label="Amount"
                    name="amountInput"
                    type="number"
                    variant="outlined"
                    onChange={handleChange}
                    value={state.amountInput}
                  ></TextField>
                </CardContent>
                <CardContent>
                  <TextField
                    required
                    id="currInput"
                    label="Currency"
                    variant="outlined"
                    name="currInput"
                    onChange={handleChange}
                    value={state.currInput}
                  ></TextField>
                </CardContent>
                <CardContent>
                  <TextField
                    required
                    id="nameInput"
                    label="Name"
                    name="nameInput"
                    variant="outlined"
                    onChange={handleChange}
                    value={state.nameInput}
                  ></TextField>
                </CardContent>
              </Card>
            </Card>
          </Grid>
          <Grid key={2} item>
            <Card elevation={0}>
              <CardContent className={classes.btn}>
                <CardContent elevation={0}>
                  <CardContent>
                    <Button
                      variant="outlined"
                      color="secondary"
                      disabled={
                        state.amountInput && state.currInput && state.dateInput && state.nameInput ? false : true
                      }
                      onClick={() => {
                        createExpence();
                      }}
                    >
                      Add Expense
                    </Button>
                  </CardContent>
                </CardContent>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddComponent;
