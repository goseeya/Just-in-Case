import React from 'react';
import styles from './Menu.module.css';

const menu = (props) => (
  <div className={styles.Menu} onClick={props.menuClicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default menu;
