import React from 'react';

import styles from './IphoneCaseControl.module.css';

const iPhoneCaseControl = (props) => (
  <div className={styles.IphoneCaseControl}>
    <input
      onChange={props.selected}
      type="radio"
      id={props.label}
      name={props.label}
      value={props.label}
      checked={props.checked} />
    <label htmlFor={props.label}>{props.label}</label>
  </div>
);

export default iPhoneCaseControl;
