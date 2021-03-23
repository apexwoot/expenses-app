import { Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Route } from 'react-router-dom';
import AddComponentContainer from './Buttons/AddComponent/AddComponentContainer';
import DeleteContainer from './Buttons/DeleteContainer';
import TotalSpentContainer from './Buttons/TotalSpent/TotalSpentContainer';
import SimpleTableContainer from './Table/SimpleTableContainer';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

const Body = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Container fixed className={classes.container} />
      <Grid container spacing={8} justify="center">
        <Grid item xs={12} md={8} lg={6}>
          <Paper>
            <Route path="/all" component={SimpleTableContainer} />
            <Route path="/add" component={AddComponentContainer} />
            <Route path="/delete" component={DeleteContainer} />
            <Route path="/total" component={TotalSpentContainer} />
          </Paper>
        </Grid>
      </Grid>
      <Container />
    </div>
  );
};

export default Body;
