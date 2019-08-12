import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import IphoneCaseCreator from './containers/IphoneCaseCreator/IphoneCaseCreator';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={IphoneCaseCreator} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
