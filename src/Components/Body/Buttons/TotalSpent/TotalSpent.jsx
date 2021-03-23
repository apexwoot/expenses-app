import React from 'react';
import { Button, Card, CardContent, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  btn: {
    margin: '7px'
  },
  outputArea: {
    margin: '11px'
  }
}));

const TotalSpent = (props) => {
  const handleChange = (e) => {
    const val = e.target.value;
    props.currencyInputOnChange(val);
  };
  const showTotal = () => {
    props.state.currenciesList.includes(props.state.fields.currencyInputField)
      ? props.calcTotalInDesiredCur(props.state.fields.currencyInputField)
      : alert('No such currency!');
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
                    id="filled-required"
                    label="Currency"
                    variant="filled"
                    onChange={handleChange}
                    value={props.state.fields.currencyInputField}
                  ></TextField>
                </CardContent>
              </Card>
            </Grid>
            <Grid key={2} item>
              <Card elevation={0}>
                <CardContent className={classes.btn}>
                  <Button
                    variant="outlined"
                    size="large"
                    color="secondary"
                    onClick={() => {
                      showTotal();
                    }}
                  >
                    Count
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            {props.state.lastTotalInDesiredCurrency ? (
              <Grid key={5} item>
                <Card elevation={0}>
                  <CardContent className={classes.outputArea}>
                    <Typography variant="h5">{`Total: ${props.state.lastTotalInDesiredCurrency?.toFixed(2)} ${
                      props.state.fields.currencyInputField
                    }`}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ) : (
              <div></div>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default TotalSpent;
