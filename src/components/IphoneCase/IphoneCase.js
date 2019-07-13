import React from 'react';

import styles from './IphoneCase.module.css';
import IphoneType from './IphoneType/IphoneType';

const iphoneCase = (props) => {
  return (
    <div className={styles.IphoneCase}>
      <IphoneType type={props.type} />
    </div>
  );
};

export default iphoneCase;
