import React, { useCallback } from 'react';
import { bool, func, instanceOf } from 'prop-types';
import { Form } from 'antd';

import { NO_VALUE } from '../../../../common/constants';

import { Modal } from '../../../index';

import PaymentForm from './form/PaymentForm';

const { useForm } = Form;

const MODAL_TITLE = {
  ADD: 'Add payment',
  EDIT: 'Edit payment',
};

const MODAL_PROPS = { footer: NO_VALUE };

function PaymentModal({
  confirm,
  deletePayment,
  handleCancel,
  payment,
  visible,
}) {
  const [form] = useForm();

  const closeModal = useCallback(() => {
    form.resetFields();
    handleCancel();
  }, [handleCancel, form]);

  return (
    <Modal
      handleCancel={closeModal}
      modalProps={MODAL_PROPS}
      title={payment ? MODAL_TITLE.EDIT : MODAL_TITLE.ADD}
      visible={visible}
    >
      <PaymentForm
        confirm={confirm}
        deletePayment={deletePayment}
        form={form}
        handleCancel={closeModal}
        payment={payment}
      />
    </Modal>
  );
}

PaymentModal.propTypes = {
  confirm: func.isRequired,
  deletePayment: func.isRequired,
  handleCancel: func.isRequired,
  payment: instanceOf(Object),
  visible: bool,
};

PaymentModal.defaultProps = {
  payment: null,
  visible: false,
};

export default PaymentModal;
