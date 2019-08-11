import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from './IphoneCase.module.css';
import IphoneType from './IphoneType/IphoneType';

const iphoneCase = (props) => {
  console.log(props);
  return (
    <div className={styles.IphoneCase}>
      <IphoneType type={props.type} />
    </div>
  );
};

export default withRouter(iphoneCase);
