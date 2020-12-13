import React from 'react';
import { string, bool, instanceOf } from 'prop-types';
import { Form, Input, InputNumber } from 'antd';

const { Item } = Form;

const DEFAULT_NAME_INPUT = 'Suzana';

function EditableCell({
  children,
  dataIndex,
  editing,
  inputType,
  ...restProps
}) {
  const isNumber = inputType === 'number';
  const inputNode = isNumber ? <InputNumber /> : <Input />;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <td {...restProps}>
      {editing ? (
        <Item
          name={dataIndex}
          initialValue={isNumber ? 0 : DEFAULT_NAME_INPUT}
          rules={[
            {
              required: true,
              message: 'The value cannot be empty!',
            },
          ]}
        >
          {inputNode}
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
  required: bool,
};

EditableCell.defaultProps = {
  dataIndex: '',
  editing: false,
  inputType: 'text',
  required: false,
};
