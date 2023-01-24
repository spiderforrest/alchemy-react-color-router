import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <NavLink to="/40/20/20">
        <h2>Color 1</h2>
      </NavLink>
      <NavLink to="/20/40/20">
        <h2>Color 2</h2>
      </NavLink>
      <NavLink to="/20/20/40">
        <h2>Color 3</h2>
      </NavLink>
    </header>
  );
}
