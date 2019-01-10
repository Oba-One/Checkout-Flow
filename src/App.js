import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import CheckoutPage from './containers/CheckoutPage'


class App extends Component {
  render() {
    return (
      <Router>
        <CheckoutPage/>
      </Router>
    );
  }
}

export default App;
