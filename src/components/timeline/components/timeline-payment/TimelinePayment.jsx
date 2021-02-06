import React from 'react';
import { func, instanceOf, string } from 'prop-types';
import { Timeline, Button, Tooltip } from 'antd';

import { DATE_FORMAT, EMPTY_STRING } from '../../../../common/constants';

import { paymentStatus } from '../../constants';

const { Item } = Timeline;

const BUTTON_STYLE = {
  background: 'transparent',
  height: '30px',
  margin: 0,
  width: '20px',
};

function TimelinePayment({ payment, editPayment, className }) {
  const { name, status = 'futurePayment', paymentDate } = payment;
  const { color, icon, text } = paymentStatus[status];

  return (
    <Item
      className={className}
      color={color}
      // @todo - Use key generator.
      key={Math.random()}
      dot={
        <Tooltip placement='bottom' title={text}>
          <Button
            data-cy='timeline-payment-status-button'
            icon={icon}
            onClick={() => editPayment(payment)}
            style={BUTTON_STYLE}
          />
        </Tooltip>
      }
    >
      <div>{name}</div>
      <div>{paymentDate.format(DATE_FORMAT)}</div>
    </Item>
  );
}

TimelinePayment.propTypes = {
  className: string,
  editPayment: func.isRequired,
  payment: instanceOf(Object).isRequired,
};

TimelinePayment.defaultProps = {
  className: EMPTY_STRING,
};

export default TimelinePayment;
