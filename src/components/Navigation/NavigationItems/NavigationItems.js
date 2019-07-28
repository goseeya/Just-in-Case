import React from 'react';

import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = () => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link="/" active>iPhone Case</NavigationItem>
    <NavigationItem link="/">Basket</NavigationItem>
  </ul>
);

export default navigationItems;
