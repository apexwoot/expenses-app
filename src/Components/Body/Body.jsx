import React from 'react';
import { Route } from 'react-router-dom';
import AddComponentContainer from './Buttons/AddComponent/AddComponentContainer';
import DeleteContainer from './Buttons/DeleteContainer';
import TotalSpentContainer from './Buttons/TotalSpent/TotalSpentContainer';
import SimpleTableContainer from './Table/SimpleTableContainer';

const Body = () => {
  return (
    <div className='body-container'>
      <Route path='/all' component={SimpleTableContainer} />
      <Route path='/add' component={AddComponentContainer} />
      <Route path='/delete' component={DeleteContainer} />
      <Route path='/total' component={TotalSpentContainer} />
    </div>
  );
};

export default Body;
