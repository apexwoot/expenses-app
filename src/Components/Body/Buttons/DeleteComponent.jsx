import { Button, Card, CardContent, Grid, makeStyles, TextField } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 200,
    width: 300
  },
  btn: {
    margin: '7px'
  },
  input: {
    '&:invalid': {
      border: 'red slid 2px'
    }
  }
});

const DeleteComponent = (props) => {
  const [state, setState] = React.useState({
    inputValue: ''
  });
  const changeHandle = (e) => {
    setState({
      inputValue: e.target.value
    });
  };

  const handleClick = () => {
    if (props.expenses.map((e) => e.date).includes(state.inputValue)) {
      props.delete(state.inputValue);
      alert(`Item created on ${state.inputValue} deleted`);
    } else {
      alert(`No item created on '${state.inputValue}'`);
    }
    state.inputValue = '';
  };
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.root} spacing={6}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={6}>
            <Grid key={4} item>
              <Card elevation={0}>
                <CardContent>
                  <TextField
                    required
                    id="filled-required"
                    label="Date"
                    variant="filled"
                    onChange={changeHandle}
                    value={state.inputValue}
                    inputProps={{ pattern: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/i }}
                  ></TextField>
                </CardContent>
              </Card>
            </Grid>

            <Grid key={2} item className={classes.btn}>
              <Card elevation={0}>
                <CardContent>
                  <Button
                    variant="outlined"
                    size="large"
                    disabled={state.inputValue ? false : true}
                    color="secondary"
                    onClick={handleClick}
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeleteComponent;
