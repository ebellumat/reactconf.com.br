import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

import globals from './utils/globals';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: ${globals.fonts.default};
    background: ${globals.colors.transparent};
    overflow-x: hidden;

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <Body />
    <Footer />
  </Fragment>
);

export default App;
