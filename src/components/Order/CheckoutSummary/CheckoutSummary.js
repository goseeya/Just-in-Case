import React from 'react';

import IphoneCase from '../../IphoneCase/IphoneCase';
import Button from '../../UI/Button/Button';
import styles from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>In this case your phone will feel really comfortable.</h1>
      <div style={{widt: '100%', margin: 'auto'}}>
        <IphoneCase type={props.type} />
      </div>
      <Button
        btnType="Danger"
        clicked={props.checkoutCancelled}>CANCEL</Button>
      <Button
        btnType="Success"
        clicked={props.checkoutContinued}>CONTINUE</Button>
    </div>
  );
}

export default checkoutSummary;
