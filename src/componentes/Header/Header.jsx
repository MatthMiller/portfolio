import React from 'react';
import './Header.css';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='Header-container'>
      <Logo />
      <Navbar />
    </header>
  );
}

export default Header;
