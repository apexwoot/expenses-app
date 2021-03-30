import React from 'react';
import Head from './Components/Head/Head';
import { BrowserRouter } from 'react-router-dom';
import BodyContainer from './Components/Body/BodyContainer';
import './styles.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Head />
        <BodyContainer />
      </div>
    </BrowserRouter>
  );
};

export default App;
