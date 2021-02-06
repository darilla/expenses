import React from 'react';
import { Timeline as AntdTimeline, Button, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { PaymentModal, TimelinePayment } from './components';

import Toast from '../toast/Toast';
import useTimelineDetails from './hooks/useTimelineDetails';

import { Container } from './Timeline.styles';

function Timeline() {
  const {
    confirm,
    deletePayment,
    displayNotification,
    editPayment,
    handleCancel,
    isModalVisible,
    notification,
    paymentDetails,
    payments,
    toggleModal,
    updatePaymentDetails,
  } = useTimelineDetails();

  return (
    <Container>
      {isModalVisible && (
        <PaymentModal
          confirm={confirm}
          deletePayment={deletePayment}
          displayNotification={displayNotification}
          handleCancel={handleCancel}
          payment={paymentDetails}
          updatePayment={updatePaymentDetails}
          visible={isModalVisible}
        />
      )}
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
          className='payment-btn'
          data-cy='add-new-payment-btn'
          icon={<PlusOutlined />}
          onClick={toggleModal}
          shape='circle'
          size='small'
          type='primary'
        />
      </Tooltip>
      {notification && (
        <Toast type={notification.type} message={notification.message} />
      )}
    </Container>
  );
}

export default Timeline;
