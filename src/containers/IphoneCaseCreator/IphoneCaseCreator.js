import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import IphoneCase from '../../components/IphoneCase/IphoneCase';
import IphoneCaseControls from '../../components/IphoneCase/IphoneCaseControls/IphoneCaseControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/IphoneCase/OrderSummary/OrderSummary';

const IPHONE_TYPE_PRICE = {
  iPhone6: 100,
  iPhone7: 110,
  iPhone8: 120,
  iPhone9: 130
}

class IphoneCaseCreator extends Component {
  state = {
    type: 'iPhone6',
    price: 100,
    purchaseable: true
  }

  updatePurchaseState (type) {
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

  render() {
    return (
      <Aux>
      <Modal>
        <OrderSummary type={this.state.type} />
      </Modal>
        <IphoneCase type={this.state.type} />
        <IphoneCaseControls
          typeSelected={this.selectType}
          checkedType={this.state.type}
          price={this.state.price}
          purchaseable={this.state.purchaseable}
           />
      </Aux>
    );
  }
}

export default IphoneCaseCreator;
