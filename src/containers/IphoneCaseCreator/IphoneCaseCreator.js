import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import IphoneCase from '../../components/IphoneCase/IphoneCase';
import IphoneCaseControls from '../../components/IphoneCase/IphoneCaseControls/IphoneCaseControls';

const IPHONE_TYPE_PRICE = {
  iPhone6: 100,
  iPhone7: 110,
  iPhone8: 120,
  iPhone9: 130
}

class IphoneCaseCreator extends Component {
  state = {
    selectedType: 'iPhone6',
    totalPrice: 100
  }

  selectType = (type) => {
    const newPrice = IPHONE_TYPE_PRICE[type];
    this.setState({
      type: type,
      totalPrice: newPrice
    })
  }

  render() {
    return (
      <Aux>
        <IphoneCase type={this.state.type} />
        <IphoneCaseControls
          typeSelected={this.selectType}
          checkedType={this.state.type}
           />
      </Aux>
    );
  }
}

export default IphoneCaseCreator;
