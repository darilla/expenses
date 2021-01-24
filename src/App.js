import React, { useState } from 'react';
import 'sanitize.css';
import 'antd/dist/antd.css';
import { createGlobalStyle } from 'styled-components';

import { EMPTY_ARRAY, NAVIGATION } from './common/constants';

import { Table, Navigation, Statistics, Timeline } from './components';
import { Container } from './App.styles';

const { HOME, PAYMENT, STATISTICS } = NAVIGATION;

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 14px;
    
    .payment-status-dropdown .ant-select-item-option-content {
      display: flex;
      align-items: center;

      span[role="img"] {
        padding-right: 8px;
      }
    }
  }
`;

function App() {
  const [activeLink, setActiveLink] = useState(PAYMENT);

  return (
    <Container>
      <GlobalStyle />
      <Navigation activeLink={activeLink} setActiveLink={setActiveLink} />
      {activeLink === HOME && <Table records={EMPTY_ARRAY} />}
      {activeLink === PAYMENT && <Timeline />}
      {activeLink === STATISTICS && <Statistics />}
    </Container>
  );
}

export default App;
