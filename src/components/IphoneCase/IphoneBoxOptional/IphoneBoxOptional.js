import React from 'react';

import styles from './IphoneBoxOptional.module.css';

const iphoneBoxOptional = (props) => (
    <div className={styles.IphoneBoxOptional}>
      <input
        type="checkbox"
        name="check"
        value={props.value}
        onChange={props.onChange}
        checked={props.checked} />
        Put into our gift box
    </div>
  );

export default iphoneBoxOptional;
