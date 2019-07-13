import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
  const type = props.type;
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A case for the model:</p>
      <p style={{color: 'pink'}}>{props.type}</p>
      <p>Continue to Checkout?</p>
    </Aux>
  )
};

export default orderSummary;
