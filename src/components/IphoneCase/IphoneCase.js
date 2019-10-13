import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import styles from './IphoneCase.module.css';
import IphoneType from './IphoneType/IphoneType';
import IphoneBoxOptional from './IphoneBoxOptional/IphoneBoxOptional';

const IphoneCase = (props) => {
  const [value, setValue] = useState(false);
  return (
    <div className={styles.IphoneCase}>
      <IphoneType type={props.type} />
      <IphoneBoxOptional onChange={() => setValue(!value)} checked={value} />
    </div>
  );
};

export default withRouter(IphoneCase);
