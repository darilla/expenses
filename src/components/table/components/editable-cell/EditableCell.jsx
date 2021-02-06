/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string, bool, instanceOf } from 'prop-types';
import { DatePicker, Form, Input, InputNumber } from 'antd';

import { EMPTY_STRING, DATE_FORMAT } from '../../../../common/constants';

const { Item } = Form;
const { TextArea } = Input;

const PLACEHOLDER = {
  EMPTY: '-',
  INPUT_NUMBER: '0',
  INPUT: 'Provide name',
  TEXTAREA: 'Write a note',
};

const { INPUT, INPUT_NUMBER, TEXTAREA, EMPTY } = PLACEHOLDER;

const NOT_EDITABLE_CELL_STYLE = { margin: '8px' };

const textareaProps = {
  autoSize: {
    minRows: 4,
  },
  allowClear: true,
  placeholder: TEXTAREA,
};

const renderEditableCell = inputType => {
  switch (inputType) {
    case 'number':
      return <InputNumber min={0} placeholder={INPUT_NUMBER} />;
    case 'textarea':
      return <TextArea {...textareaProps} />;
    case 'date':
      return <DatePicker format={DATE_FORMAT} allowClear={false} />;
    default:
      return <Input placeholder={INPUT} allowClear />;
  }
};

/**
 * EditableCell component is responsible for rendering basic
 * input components. It does not handle more complex logic.
 */
function EditableCell({
  children,
  dataIndex,
  editing,
  inputType,
  required,
  ...restProps
}) {
  const rules = [{ required, message: 'This filed is required' }];

  return (
    <td {...restProps}>
      {editing ? (
        <Item name={dataIndex} rules={rules}>
          {renderEditableCell(inputType)}
        </Item>
      ) : (
        // Data that is rendered is located on second place in the array.
        <div style={NOT_EDITABLE_CELL_STYLE}>
          {children[1]
            ? children
            : inputType === 'number'
            ? INPUT_NUMBER
            : EMPTY}
        </div>
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
  required: bool,
};

EditableCell.defaultProps = {
  dataIndex: EMPTY_STRING,
  editing: false,
  inputType: 'text',
  required: false,
};
