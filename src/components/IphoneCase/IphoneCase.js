import React from 'react';

import styles from './IphoneCase.module.css';
import IphoneType from './IphoneType/IphoneType';

const iphoneCase = (props) => {
  return (
    <div className={styles.IphoneCase}>
      <IphoneType type="Iphone6" />
      <IphoneType type="Iphone7" />
      <IphoneType type="Iphone8" />
      <IphoneType type="Iphone9" />
    </div>
  );
};

export default iphoneCase;
