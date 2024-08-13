import React from 'react';

import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

interface NavigationItemsProps {
  isAuthenticated: boolean;
}
const NavigationItems = ({ isAuthenticated }: NavigationItemsProps) => (
  <ul className="navigation-items">
    <NavigationItem link="/" exact>
      iPhone Case
    </NavigationItem>
    {isAuthenticated ? (
      <NavigationItem link="/orders">Shopping bag</NavigationItem>
    ) : null}
    {isAuthenticated ? (
      <NavigationItem link="/logout">Logout</NavigationItem>
    ) : (
      <NavigationItem link="/auth">Authenticate</NavigationItem>
    )}
  </ul>
);

export default NavigationItems;
