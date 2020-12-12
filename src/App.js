import React from 'react';
import 'sanitize.css';
import 'antd/dist/antd.css';
import { Typography } from 'antd';

import { Table } from './components';

const { Title } = Typography;

const MOCK_DATA = [
  {
    key: 0,
    name: 'Peter',
    date: '11 October 2020',
    costs: 120,
    tags: ['shopping', 'selfGift'],
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
];

function App() {
  return (
    <div>
      <Title>Expenses</Title>
      <Table records={MOCK_DATA} />
    </div>
  );
}

export default App;
