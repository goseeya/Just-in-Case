import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import IphoneCase from '../../components/IphoneCase/IphoneCase';

class IphoneCaseCreator extends Component {
  render() {
    return (
      <Aux>
        <IphoneCase />
        <div>Iphone type controls</div>
      </Aux>
    );
  }
}

export default IphoneCaseCreator;
