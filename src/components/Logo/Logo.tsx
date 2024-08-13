import React from 'react';

import caseLogo from './../../assets/images/iphone_case.jpg';
import './Logo.scss';
const Logo = () => (
  <div className="logo">
    <img src={caseLogo} alt="MyCase" />
  </div>
);

export default Logo;
