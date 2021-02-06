/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';
import { func, instanceOf } from 'prop-types';
import { DatePicker, Form, Input } from 'antd';
import moment from 'moment';

import { paymentStatus } from '../../../constants';

import {
  DATE_FORMAT,
  EMPTY_ARRAY,
  EMPTY_STRING,
} from '../../../../../common/constants';

import ActionButtons from './action-buttons/ActionButtons';
import StatusSelect from './status-select/StatusSelect';

const { RangePicker } = DatePicker;

const { Item } = Form;

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 20,
  },
};

const DATE_COMPONENT_STYLE = { width: '100%' };

const INITIAL_VALUES = {
  name: EMPTY_STRING,
  paymentDate: moment(),
  paymentPeriod: EMPTY_ARRAY,
  status: paymentStatus.onTime.value,
};

function PaymentForm({
  confirm,
  deletePayment,
  displayNotification,
  form,
  handleCancel,
  payment,
}) {
  if (form && payment) {
    form.setFieldsValue({
      name: payment.name,
      status: payment.status,
      paymentPeriod: payment.paymentPeriod,
      paymentDate: payment.paymentDate,
    });
  }

  const handleFormSubmit = useCallback(() => {
    const values = form.getFieldsValue();

    if (payment) {
      confirm({ ...values, key: payment.key });

      displayNotification({
        message: `Payment "${values.name}" updated!`,
      });
    } else {
      confirm(values);

      displayNotification({
        message: `Payment "${values.name}" created!`,
      });
    }
  }, [form, confirm, payment, displayNotification]);

  const handleDelete = useCallback(async () => {
    const values = await form.getFieldsValue();
    deletePayment(payment);

    displayNotification({
      message: `Payment "${values.name}" deleted!`,
    });
    form.resetFields();
  }, [deletePayment, payment, form, displayNotification]);

  return (
    <Form
      data-cy='payment-form-name'
      form={form}
      initialValues={INITIAL_VALUES}
      name='payment-form'
      onFinish={handleFormSubmit}
      {...layout}
    >
      <Item
        label='Name'
        name='name'
        rules={[
          {
            required: true,
            message: 'Please provide payment name',
          },
        ]}
      >
        <Input placeholder='Write payment name' allowClear />
      </Item>
      <Item
        name='paymentDate'
        label='Payment date'
        rules={[
          {
            required: true,
            message: 'Please provide a date',
          },
        ]}
      >
        <DatePicker
          name='paymentDate'
          format={DATE_FORMAT}
          style={DATE_COMPONENT_STYLE}
        />
      </Item>
      <Item
        name='paymentPeriod'
        label='Payment period'
        rules={[
          {
            required: true,
            message: 'Please provide a payment period',
          },
        ]}
      >
        <RangePicker format={DATE_FORMAT} style={DATE_COMPONENT_STYLE} />
      </Item>
      <StatusSelect />
      <ActionButtons
        isEditing={!!payment}
        deletePayment={handleDelete}
        cancelPayment={handleCancel}
      />
    </Form>
  );
}

PaymentForm.propTypes = {
  confirm: func.isRequired,
  deletePayment: func.isRequired,
  displayNotification: func.isRequired,
  form: instanceOf(Object),
  handleCancel: func.isRequired,
  payment: instanceOf(Object),
};

PaymentForm.defaultProps = {
  payment: null,
  form: null,
};

export default PaymentForm;
