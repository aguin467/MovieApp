import React from 'react';
import './App.scss';
import logo from './Logo.png';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white'
  };

  return (
    <nav>
      <img className='logo' src={logo} alt='logo' />
      <ul className='nav-links'>
        <Link style={navStyle} to='/films'>
          <li>Films</li>
        </Link>
        <Link style={navStyle} to='/ids'>
          <li>Ids</li>
        </Link>
        <Link style={navStyle} to='/links'>
          <li>Links</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
