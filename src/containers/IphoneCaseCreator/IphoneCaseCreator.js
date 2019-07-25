import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import IphoneCase from '../../components/IphoneCase/IphoneCase';
import IphoneCaseControls from '../../components/IphoneCase/IphoneCaseControls/IphoneCaseControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/IphoneCase/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

const IPHONE_TYPE_PRICE = {
  iPhone6: 100,
  iPhone7: 110,
  iPhone8: 120,
  iPhone9: 130
}

class IphoneCaseCreator extends Component {
  state = {
    type: null,
    price: 100,
    purchaseable: true,
    purchasing: false,
    loading: false,
    error: false
  }

  componentDidMount () {
    axios.get('https://react-iphone-case.firebaseio.com/type.json')
      .then(response => {
        console.log(response);
        Object.filter = (obj, predicate) =>
          Object.keys(obj)
            .filter( key => predicate(obj[key]))
            .reduce( (res, key) => Object.assign(res, { [key]: obj[key] }), {} );

        let iPhoneType = Object.filter(response.data, type => type);
        let typeToReturn = Object.keys(iPhoneType)[0];
        this.setState({type: typeToReturn});
      })
      .catch(error => {
        this.setState({error: true});
      });
}

  updatePurchaseState(type) {
    const purchaseableModels = ['iPhone6', 'iPhone7', 'iPhone8'];
    this.setState({ purchaseable: purchaseableModels.includes(type)});
  }

  selectType = (type) => {
    const newPrice = IPHONE_TYPE_PRICE[type];
    this.setState({
      type: type,
      price: newPrice
    })
    this.updatePurchaseState(type);
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    // alert('You continue!');
    this.setState({ loading: true });
    const order = {
      type: this.state.type,
      price: this.state.price,
      customer: {
        name: 'Gosia Rakowska',
        address: {
          street: 'Rakowska 11/128',
          zipCode: '12345',
          country: 'Holland'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }

    axios.post('/orders', order)
      .then(response => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch(error => {
      this.setState({ loading: false, purchasing: false });
    });
  }

  render() {
    let orderSummary = null;
    let iPhoneCase = this.state.error ? <p>Case can't be loaded</p> : <Spinner />;

    if (this.state.type) {
      iPhoneCase = (
        <Aux>
          <IphoneCase type={this.state.type} />
          <IphoneCaseControls
            typeSelected={this.selectType}
            checkedType={this.state.type}
            ordered={this.purchaseHandler}
            price={this.state.price}
            purchaseable={this.state.purchaseable}
             />
        </Aux>
      );
      orderSummary = <OrderSummary
        type={this.state.type}
        price={this.state.price}
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler} />;
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
      <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
        {orderSummary}
      </Modal>
        {iPhoneCase}
      </Aux>
    );
  }
}

export default withErrorHandler(IphoneCaseCreator, axios);
