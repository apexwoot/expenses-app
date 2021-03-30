import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarButton = props => {
  // add delete all total
  return (
    <div id={props.title} className='nav-container'>
      <NavLink to={props.hrefTo}>
        <button className='nav-button'>{props.title}</button>
      </NavLink>
    </div>
  );
};

export default NavBarButton;
