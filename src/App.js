import React, { useState } from 'react';
import 'sanitize.css';
import 'antd/dist/antd.css';
import { createGlobalStyle } from 'styled-components';

import { EMPTY_ARRAY, NAVIGATION } from './common/constants';
import { GRAY } from './common/colors';

import { Table, Navigation, Statistics, Timeline } from './components';
import { Container } from './App.styles';

const { HOME, PAYMENT, STATISTICS } = NAVIGATION;

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 14px;
    
    .stats-date-picker {
      width: 180px;
      
      input {
        font-size: 20px;
        color: ${GRAY.GRAY_9};
      }

      input::placeholder {
        color: ${GRAY.GRAY_9};
      }

      .ant-picker-suffix {
        svg {
          fill: ${GRAY.GRAY_9};
          width: 25px;
          height: 25px;
        }
      }
    }
  
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
