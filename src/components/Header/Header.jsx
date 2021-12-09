import React from 'react';

import logo from '../../assets/img/Logo.png';

import './Header.scss';

const Header = () => (
  <div className="header">
    <img className="header__logo" alt="logo" src={logo} />
  </div>
);

export default Header;
