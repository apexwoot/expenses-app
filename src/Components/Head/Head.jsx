import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  button: {
    marginInline: '10px'
  }
}));

const Head = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Typography variant="h6" className={classes.title}>
          <NavLink to="/add">
            <Button variant="contained" className={classes.button}>
              Add
            </Button>
          </NavLink>
          <NavLink to="/delete">
            <Button variant="contained" className={classes.button}>
              Delete
            </Button>
          </NavLink>
          <NavLink to="/all">
            <Button variant="contained" className={classes.button}>
              All expenses
            </Button>
          </NavLink>
          <NavLink to="/total">
            <Button variant="contained" className={classes.button}>
              Total Spent
            </Button>
          </NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Head;
