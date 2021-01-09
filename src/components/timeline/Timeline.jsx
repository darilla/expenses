import React from 'react';
import { Timeline as AntdTimeline, Button, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { PaymentModal, TimelinePayment } from './components';
import { Container } from './Timeline.styles';

import useTimelineDetails from './hooks/useTimelineDetails';

function Timeline() {
  const {
    confirm,
    deletePayment,
    editPayment,
    handleCancel,
    isModalVisible,
    paymentDetails,
    payments,
    toggleModal,
    updatePaymentDetails,
  } = useTimelineDetails();

  return (
    <Container>
      <PaymentModal
        confirm={confirm}
        deletePayment={deletePayment}
        handleCancel={handleCancel}
        payment={paymentDetails}
        updatePayment={updatePaymentDetails}
        visible={isModalVisible}
      />
      <AntdTimeline mode='alternate'>
        {payments.map(payment => (
          <TimelinePayment
            editPayment={editPayment}
            key={payment.name}
            payment={payment}
          />
        ))}
      </AntdTimeline>
      <Tooltip title='Add a new payment'>
        <Button
          icon={<PlusOutlined />}
          onClick={toggleModal}
          shape='circle'
          size='small'
          type='primary'
        />
      </Tooltip>
    </Container>
  );
}

export default Timeline;
