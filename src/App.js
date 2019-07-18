import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import IphoneCaseCreator from './containers/IphoneCaseCreator/IphoneCaseCreator';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <IphoneCaseCreator />
        </Layout>
      </div>
    );
  }
}

export default App;
