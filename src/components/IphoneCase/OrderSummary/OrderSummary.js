import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => (
  <Aux>
    <h3>Your Order</h3>
    <p>A case for the model:</p>
    <p style={{color: 'pink'}}>{props.type}</p>
    <p><strong>Price: {props.price}</strong></p>
    <p>Continue to Shopping bag?</p>
    <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
    <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
  </Aux>
);


export default orderSummary;
