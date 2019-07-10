import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import CaseCreator from './containers/CaseCreator/CaseCreator';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <CaseCreator />
        </Layout>
      </div>
    );
  }
}

export default App;
