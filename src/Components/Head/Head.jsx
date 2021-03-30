import React from 'react';
import NavBarButton from '../Body/NavBarButtonComponent/NavBarButton';

const Head = () => {
  return (
    <div className='navBar'>
      <NavBarButton hrefTo='/add' title='Add' />
      <NavBarButton hrefTo='/delete' title='Delete' />
      <NavBarButton hrefTo='/total' title='Total' />
      <NavBarButton hrefTo='/all' title='All' />
    </div>
  );
};

export default Head;
