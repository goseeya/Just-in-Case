import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';

interface SideDrawerProps {
  open: boolean;
  closed: () => void;
  isAuth: boolean;
}
const SideDrawer = ({ open, closed, isAuth }: SideDrawerProps) => {
  let attachedClasses = ['side-drawer', 'close'];
  if (open) {
    attachedClasses = ['side-drawer', 'open'];
  }
  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClasses.join(' ')} onClick={closed}>
        <div className="logo-wrapper">
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={isAuth} />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
