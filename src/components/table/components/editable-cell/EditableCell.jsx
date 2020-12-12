import React from 'react';
import { string, bool, instanceOf } from 'prop-types';
import { Form, Input, InputNumber } from 'antd';

const { Item } = Form;

function EditableCell({
  children,
  dataIndex,
  required,
  editing,
  inputType,
  ...restProps
}) {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <td {...restProps}>
      {editing ? (
        <Item
          name={dataIndex}
          rules={[
            {
              required,
              // @todo - display error message when field is invalid
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
