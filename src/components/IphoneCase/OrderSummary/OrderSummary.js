import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // This component can be a functional one as well
  // componentWillUpdate() {
  //   console.log('[OrderSummary] Will update');
  // }
  render () {
    const type = this.props.type;
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A case for the model:</p>
        <p style={{color: 'pink'}}>{this.props.type}</p>
        <p><strong>Price: {this.props.price}</strong></p>
        <p>Continue to Basket?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </Aux>
    );
  }
};

export default OrderSummary;
