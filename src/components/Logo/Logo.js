import React from 'react';

import caseLogo from '../../assets/images/iphone_case.jpg';
import styles from './Logo.module.css';

const logo = (props) => (
  <div className={styles.Logo}>
    <img src={caseLogo} alt="MyCase" />
  </div>
);

export default logo;
