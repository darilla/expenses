import React from 'react';
import { string, bool, instanceOf } from 'prop-types';
import { DatePicker, Form, Input, InputNumber } from 'antd';

import {
  EMPTY_STRING,
  NO_VALUE,
  DATE_FORMAT,
} from '../../../../common/constants';

const { Item } = Form;
const { TextArea } = Input;

const PLACEHOLDER = {
  INPUT_NUMBER: '0',
  INPUT: 'Provide name',
  TEXTAREA: 'Write a note',
};

const { INPUT, INPUT_NUMBER, TEXTAREA } = PLACEHOLDER;

const renderEditableCell = inputType => {
  switch (inputType) {
    case 'number':
      return <InputNumber placeholder={INPUT_NUMBER} />;
    case 'textarea':
      return <TextArea placeholder={TEXTAREA} allowClear />;
    case 'date':
      return <DatePicker format={DATE_FORMAT} allowClear={false} />;
    default:
      return <Input placeholder={INPUT} allowClear />;
  }
};

function EditableCell({
  children,
  dataIndex,
  editing,
  inputType,
  required,
  ...restProps
}) {
  const rules = [{ required, message: `${dataIndex} filed is required` }];

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <td {...restProps}>
      {editing ? (
        <Item name={dataIndex} rules={rules}>
          {renderEditableCell(inputType)}
        </Item>
      ) : (
        <div>{children}</div>
      )}
    </td>
  );
}

export default EditableCell;

EditableCell.propTypes = {
  children: instanceOf(Array).isRequired,
  dataIndex: string,
  editing: bool,
  inputType: string,
  record: instanceOf(Object),
  required: bool,
};

EditableCell.defaultProps = {
  dataIndex: EMPTY_STRING,
  editing: false,
  inputType: 'text',
  record: NO_VALUE,
  required: false,
};
