import React from 'react';

import './Header.scss';
import logo from '../../assets/img/Logo.png';

const Header = () => (
  <div className="header">
    <img className="header__logo" alt="logo" src={logo} />
  </div>
);

export default Header;
