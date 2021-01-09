/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';
import { func, instanceOf } from 'prop-types';
import { DatePicker, Form, Input } from 'antd';
import moment from 'moment';

import { DATE_FORMAT, EMPTY_ARRAY } from '../../../../../common/constants';

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
  name: '',
  paymentDate: moment(),
  paymentPeriod: EMPTY_ARRAY,
  status: 'onTime',
};

function PaymentForm({ form, confirm, handleCancel, payment, deletePayment }) {
  if (payment) {
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
    } else {
      confirm(values);
    }

    form.resetFields();
  }, [form, confirm, payment]);

  const handleDelete = useCallback(() => {
    form.resetFields();
    deletePayment(payment);
  }, [deletePayment, payment, form]);

  return (
    <Form
      form={form}
      onFinish={handleFormSubmit}
      initialValues={INITIAL_VALUES}
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
  form: instanceOf(Object).isRequired,
  handleCancel: func.isRequired,
  confirm: func.isRequired,
  deletePayment: func.isRequired,
  payment: instanceOf(Object),
};

PaymentForm.defaultProps = {
  payment: null,
};

export default PaymentForm;
