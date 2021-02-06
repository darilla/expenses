import { useCallback, useState, useEffect } from 'react';

import { EMPTY_ARRAY, NO_VALUE } from '../../../common/constants';

function useTimelineDetails() {
  const [notification, displayNotification] = useState(null);

  const [payments, updatePayments] = useState(EMPTY_ARRAY);
  const [paymentDetails, updatePaymentDetails] = useState(NO_VALUE);

  const [visible, setVisible] = useState(false);

  const toggleModal = useCallback(() => setVisible(!visible), [visible]);

  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        displayNotification(null);
      }, 3000);
    }
  }, [notification]);

  const handleCancel = useCallback(() => {
    toggleModal();
    updatePaymentDetails(NO_VALUE);
  }, [updatePaymentDetails, toggleModal]);

  const editPayment = useCallback(
    payment => {
      toggleModal();
      updatePaymentDetails(payment);
    },
    [updatePaymentDetails, toggleModal],
  );

  const handleConfirm = useCallback(
    values => {
      const data = [...payments];
      const { key } = values;

      if (key || key === 0) {
        // Edit payment.
        data[key] = values;
      } else {
        // Add payment.
        const index = data.length;
        data[index] = { ...values, key: index };
      }

      updatePayments(data);
      handleCancel();
    },
    [handleCancel, payments],
  );

  const deletePayment = useCallback(
    payment => {
      const data = payments.filter(
        timelinePayment => timelinePayment.key !== payment.key,
      );

      updatePayments(data);
      handleCancel();
    },
    [handleCancel, payments],
  );

  return {
    confirm: handleConfirm,
    deletePayment,
    displayNotification,
    editPayment,
    handleCancel,
    isModalVisible: visible,
    notification,
    paymentDetails,
    payments,
    toggleModal,
    updatePaymentDetails,
  };
}

export default useTimelineDetails;
