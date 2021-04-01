import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Body from './Components/Body/Body';
import HeadContainer from './Components/Head/HeadContainer';
import './styles.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeadContainer />
        <Body />
      </div>
    </BrowserRouter>
  );
};

export default App;
