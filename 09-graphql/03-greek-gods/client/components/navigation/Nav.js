import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

const Nav = () => (
  <nav>
    <NavLink to='/'>Gods Index</NavLink>
    <NavLink to='/new'>Submission Form</NavLink>
  </nav>
);

export default Nav;
