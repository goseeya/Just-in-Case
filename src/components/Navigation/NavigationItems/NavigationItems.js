import React from 'react';

import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = () => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link="/" exact>iPhone Case</NavigationItem>
    <NavigationItem link="/orders">Shopping bag</NavigationItem>
    <NavigationItem link="/auth">Authenticate</NavigationItem>
  </ul>
);

export default navigationItems;
