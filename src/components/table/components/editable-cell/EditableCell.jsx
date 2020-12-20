import React from 'react';
import { string, bool, instanceOf } from 'prop-types';
import { Form, Input, InputNumber } from 'antd';

import { EMPTY_STRING } from '../../../../common/constants';

const { Item } = Form;
const { TextArea } = Input;

const renderEditableCell = inputType => {
  switch (inputType) {
    case 'number':
      return <InputNumber />;
    case 'textarea':
      return <TextArea />;
    default:
      return <Input />;
  }
};

function EditableCell({
  children,
  dataIndex,
  editing,
  inputType,
  ...restProps
}) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <td {...restProps}>
      {editing ? (
        <Item name={dataIndex}>{renderEditableCell(inputType)}</Item>
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
  required: bool,
};

EditableCell.defaultProps = {
  dataIndex: EMPTY_STRING,
  editing: false,
  inputType: 'text',
  required: false,
};
