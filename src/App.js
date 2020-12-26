import React from 'react';
import 'sanitize.css';
import 'antd/dist/antd.css';

import { EMPTY_ARRAY } from './common/constants';

import { Table, Navigation } from './components';
import { Container } from './App.styles';

function App() {
  return (
    <Container>
      <Navigation />
      <Table records={EMPTY_ARRAY} />
    </Container>
  );
}

export default App;
