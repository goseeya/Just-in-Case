import React from 'react';

import styles from './Order.module.css';

const order = (props) => (
  <div className={styles.Order}>
    <p style={{
      display: 'inline',
      border: '1px solid #ccc',
      padding: '5px'
      }}>Type: {props.type}</p>
    <p>Price: <strong>USD {props.price}</strong></p>
  </div>
);

export default order;
