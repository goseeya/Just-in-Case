import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    type: '',
    price: 0
  }

  componentWillMount() {
    // console.log(this.props.location.search);
    const query = new URLSearchParams(this.props.location.search);
    // console.log(query);
    const params = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === 'price') {
        price = param[1];
      } else {
        params[param[0]] = param[1];
      }
    }

    this.setState({ type: params.type, price: price });
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          type={this.state.type}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler} />
        <Route
          path={this.props.match.path + '/contact-data'}
          render={(props) => (<ContactData type={this.state.type} price={this.state.price} {...props} />)}
          />
      </div>
    );
  }
}

export default Checkout;
