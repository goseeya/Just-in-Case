import React from 'react';

import styles from './Order.module.css';

const order = (props) => (
  <div className={styles.Order}>
    <p>Type: iPhone6</p>
    <p>Price: <strong>100</strong></p>
  </div>
);

export default order;
