import React, { useCallback, useState } from 'react';
import { instanceOf, bool } from 'prop-types';
import { CloseOutlined } from '@ant-design/icons';

import { EMPTY_ARRAY } from '../../../../common/constants';

import { NO_DATA_PLACEHOLDER, TAG } from '../../constants';

import NewTag from './components/NewTag';

import { StyledTag } from './TagsRenderer.styles';

function TagsRenderer({ tags, isEditing }) {
  const [recordTags, updateRecordTags] = useState(tags);

  const handleCloseTag = useCallback(
    e => {
      const clickedTag = e.currentTarget.getAttribute('name');

      const updatedTags = recordTags.filter(tag => tag !== clickedTag);

      updateRecordTags(updatedTags);
    },
    [recordTags],
  );

  if (!isEditing && recordTags.length === 0) {
    return <span>{NO_DATA_PLACEHOLDER}</span>;
  }

  return (
    <div>
      {recordTags.map(tag => (
        <StyledTag
          closable={isEditing}
          closeIcon={<CloseOutlined onClick={handleCloseTag} name={tag} />}
          color={TAG[tag]?.color}
          key={tag}
          name={tag}
        >
          {TAG[tag]?.name.toUpperCase()}
        </StyledTag>
      ))}
      {isEditing && (
        <NewTag recordTags={recordTags} updateRecordTags={updateRecordTags} />
      )}
    </div>
  );
}
export default TagsRenderer;

TagsRenderer.propTypes = {
  tags: instanceOf(Array),
  isEditing: bool,
};

TagsRenderer.defaultProps = {
  tags: EMPTY_ARRAY,
  isEditing: false,
};
