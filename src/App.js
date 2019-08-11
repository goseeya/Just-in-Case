import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import IphoneCaseCreator from './containers/IphoneCaseCreator/IphoneCaseCreator';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <IphoneCaseCreator />
          <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;
