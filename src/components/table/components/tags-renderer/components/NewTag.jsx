import React, { useCallback, useState } from 'react';
import { func, instanceOf } from 'prop-types';
import { Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { EMPTY_ARRAY, EMPTY_STRING } from '../../../../../common/constants';

import { TAG } from '../../../constants';

import { StyledTag } from '../TagsRenderer.styles';

const INPUT_STYLE = { width: 78, marginLeft: '5px' };

function NewTag({ recordTags, updateRecordTags }) {
  const [inputVisible, toggleInput] = useState(false);
  const [inputValue, setInputValue] = useState(EMPTY_STRING);

  const handleChange = useCallback(e => setInputValue(e.target.value), []);
  const handleClick = useCallback(() => toggleInput(!inputValue), [inputValue]);

  const handleInputConfirm = () => {
    let updatedTags = [...recordTags];

    /**
     * 1. Check if value is not empty string.
     * 2. Check if tag exists in default tags list.
     * 3. Check if tag hasn't been already added.
     */
    if (
      inputValue &&
      TAG[inputValue] &&
      recordTags.indexOf(inputValue) === -1
    ) {
      updatedTags = [...recordTags, inputValue];
    }

    setInputValue(EMPTY_STRING);
    toggleInput(false);
    updateRecordTags(updatedTags);
    // @todo - show notification that the tag is not on the list.
  };

  return (
    <div>
      {inputVisible ? (
        <Input
          onBlur={handleInputConfirm}
          onChange={handleChange}
          onPressEnter={handleInputConfirm}
          size='small'
          style={INPUT_STYLE}
          type='text'
          value={inputValue}
        />
      ) : (
        <StyledTag onClick={handleClick}>
          <PlusOutlined />
          <span>New Tag</span>
        </StyledTag>
      )}
    </div>
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
