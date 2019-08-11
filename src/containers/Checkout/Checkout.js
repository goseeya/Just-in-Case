import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  state= {
    type: 'iPhone7'
  }
  render() {
    return (
      <div>
        <CheckoutSummary type={this.state.type} />
      </div>
    );
  }
}

export default Checkout;
