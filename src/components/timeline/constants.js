import React from 'react';

import {
  BankTwoTone,
  CheckCircleTwoTone,
  ClockCircleTwoTone,
  ExclamationCircleTwoTone,
  PushpinTwoTone,
} from '@ant-design/icons';

export const paymentStatus = {
  futurePayment: {
    color: 'black',
    icon: <PushpinTwoTone twoToneColor='black' />,
    text: 'Future payment',
  },
  nextPayment: {
    color: '#1890ff',
    icon: <ClockCircleTwoTone twoToneColor='#1890ff' />,
    text: 'Next payment',
  },
  onTime: {
    color: '#7cb305',
    icon: <CheckCircleTwoTone twoToneColor='#7cb305' />,
    text: 'On time',
  },
  overdue: {
    color: '#f5222d',
    icon: <ExclamationCircleTwoTone twoToneColor='#f5222d' />,
    text: 'Overdue',
  },
  bankTransfer: {
    color: '#003a8c',
    icon: <BankTwoTone twoToneColor='#003a8c' />,
    text: 'Bank transfer',
  },
};
