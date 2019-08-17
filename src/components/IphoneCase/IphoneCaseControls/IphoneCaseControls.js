import React from 'react';

import styles from './IphoneCaseControls.module.css';
import IphoneCaseControl from './IphoneCaseControl/IphoneCaseControl';

const controls = [
  { label: 'iPhone6', type: 'iPhone6' },
  { label: 'iPhone7', type: 'iPhone7' },
  { label: 'iPhone8', type: 'iPhone8' },
  { label: 'iPhone9', type: 'iPhone9' },

];

const iPhoneCaseControls = (props) => (
  <div className={styles.IphoneCaseControl}>
    <p>Price for the case: {props.price}</p>
      {controls.map(ctrl => (
        <IphoneCaseControl
          key={ctrl.label}
          label={ctrl.label}
          selected={() => props.typeSelected(ctrl.type)}
          checked={props.checkedType===ctrl.type}
           />
      ))}
      <button
        className={styles.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.ordered}>ORDER NOW</button>
  </div>
);
export default iPhoneCaseControls;
