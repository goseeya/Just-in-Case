import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state= {
    type: 'iPhone7'
  }

  componentDidMount() {
    // console.log(this.props.location.search);
    const query = new URLSearchParams(this.props.location.search);
    // console.log(query);
    const params = {};
    for (let param of query.entries()) {
      params[param[0]] = param[1];
    }

    this.setState({type: params.type});
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
          component={ContactData} />
      </div>
    );
  }
}

export default Checkout;
