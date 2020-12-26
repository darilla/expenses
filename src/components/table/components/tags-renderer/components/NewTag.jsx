import React, { useCallback, useState } from 'react';
import { func, instanceOf } from 'prop-types';
import { Input, Form } from 'antd';
import { PlusOutlined, WarningTwoTone } from '@ant-design/icons';

import {
  EMPTY_ARRAY,
  EMPTY_STRING,
  NO_VALUE,
} from '../../../../../common/constants';

import { TAG } from '../../../constants';

import { StyledNewTag } from '../TagsRenderer.styles';

const NOT_EXISTING_DATA = -1;
const INPUT_STYLE = { width: '170px' };
const { Item } = Form;

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

function NewTag({ recordTags, updateRecordTags }) {
  const [warning, setWarning] = useState(NO_VALUE);
  const [inputVisible, toggleInput] = useState(false);
  const [inputValue, setInputValue] = useState(EMPTY_STRING);

  const handleChange = useCallback(
    e => {
      const { value } = e.target;
      if (recordTags.indexOf(value) !== NOT_EXISTING_DATA) {
        setWarning('This field has been added');
      } else if (!value) {
        setWarning('The field cannot be empty');
      } else {
        setWarning(NO_VALUE);
      }
      setInputValue(e.target.value);
    },
    [recordTags],
  );

  const handleClick = useCallback(() => toggleInput(true), []);

  // eslint-disable-next-line consistent-return
  const handleInputConfirm = () => {
    /**
     * 1. Check if value is empty string.
     * 2. Check if tag has been already added.
     */
    if (!inputValue || recordTags.indexOf(inputValue) !== NOT_EXISTING_DATA) {
      return;
    }

    // Check if tag exists in default tags list.
    if (!TAG[inputValue]) {
      TAG[inputValue] = {
        color: getRandomColor(),
        name: inputValue,
      };
    }

    updateRecordTags([...recordTags, inputValue]);

    setInputValue(EMPTY_STRING);
    // @todo - show notification that the tag is not on the list.
  };

  const closeEditableTag = useCallback(() => {
    if (!inputValue) {
      toggleInput(false);
    }
  }, [inputValue]);

  return (
    <Item
      validateStatus={warning ? 'warning' : 'success'}
      help={inputVisible && warning}
    >
      {inputVisible ? (
        <Input
          allowClear
          autoFocus
          maxLength={30}
          onBlur={closeEditableTag}
          onChange={handleChange}
          onPressEnter={handleInputConfirm}
          style={INPUT_STYLE}
          suffix={warning && <WarningTwoTone twoToneColor='#ebb92f' />}
          type='text'
          value={inputValue}
        />
      ) : (
        <StyledNewTag onClick={handleClick}>
          <PlusOutlined />
          <span>New Tag</span>
        </StyledNewTag>
      )}
    </Item>
  );
}

NewTag.propTypes = {
  recordTags: instanceOf(Array),
  updateRecordTags: func.isRequired,
};

NewTag.defaultProps = {
  recordTags: EMPTY_ARRAY,
};

export default NewTag;
