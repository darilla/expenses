import React from 'react';
import 'sanitize.css';
import 'antd/dist/antd.css';

import { Table, Navigation } from './components';
import { Container } from './App.styles';

const MOCK_DATA = [
  {
    key: 0,
    name: 'Peter',
    date: '11 October 2020',
    costs: 120,
    tags: ['shopping', 'self-gift'],
    note: '-',
  },
  {
    key: 1,
    name: 'Suzana',
    date: '14 October 2020',
    costs: 120,
    tags: ['shopping'],
    note: '-',
  },
  {
    key: 2,
    name: 'Suzana',
    date: '11 November 2020',
    costs: 243,
    tags: ['cats', 'credit'],
    note: '-',
  },
  {
    key: 3,
    name: 'Suzana',
    date: '5 December 2020',
    costs: 98,
    tags: ['gifts'],
    note: '-',
  },
  {
    key: 4,
    name: 'Suzana',
    date: '5 December 2020',
    costs: 98,
    tags: ['self-gift'],
    note: '-',
  },
];

function App() {
  return (
    <Container>
      <Navigation />
      <Table records={MOCK_DATA} />
    </Container>
  );
}

export default App;
