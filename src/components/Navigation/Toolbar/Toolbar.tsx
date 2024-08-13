import React from 'react';

import './Toolbar.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from './Menu/Menu';

interface ToolbarProps {
  clickMenu: () => void;
  isAuth: boolean;
}
const Toolbar = ({ clickMenu, isAuth }: ToolbarProps) => (
  <header className="toolbar">
    <Menu menuClicked={clickMenu} />
    <div className="logo-toolbar">
      <Logo />
    </div>
    <nav className="desktop-only">
      <NavigationItems isAuthenticated={isAuth} />
    </nav>
  </header>
);

export default Toolbar;
