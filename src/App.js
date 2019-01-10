import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme} from './theme'
import CheckoutPage from './containers/CheckoutPage'


const App = () => (
  <Router>
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <CheckoutPage/>
      </ThemeProvider>
    </>
  </Router>
);

export default App;
