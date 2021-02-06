import React from 'react';
import { Select } from 'antd';

import { paymentStatus } from '../../../../constants';

import { StyledItem } from './StatusSelect.styles';

const { Option } = Select;

function StatusSelect() {
  return (
    <StyledItem name='status' label='Status'>
      <Select
        data-cy='status-select'
        dropdownClassName='payment-status-dropdown'
      >
        {Object.keys(paymentStatus).map(statusName => (
          <Option value={statusName} key={statusName}>
            {paymentStatus[statusName].icon}
            <span>{paymentStatus[statusName].text}</span>
          </Option>
        ))}
      </Select>
    </StyledItem>
  );
}

export default StatusSelect;
