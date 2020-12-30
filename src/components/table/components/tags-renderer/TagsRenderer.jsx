import React, { useCallback, useState } from 'react';
import { instanceOf, bool } from 'prop-types';
import { CloseOutlined } from '@ant-design/icons';

import { EMPTY_ARRAY, NO_VALUE } from '../../../../common/constants';

import { NO_DATA_PLACEHOLDER, TAG } from '../../constants';
import NewTag from './components/NewTag';

import { StyledTag, TagWrapper } from './TagsRenderer.styles';

function TagsRenderer({ tags, isEditing, form }) {
  const [recordTags, updateRecordTags] = useState(tags);

  const handleCloseTag = useCallback(
    e => {
      const clickedTag = e.currentTarget.getAttribute('name');

      const updatedTags = recordTags.filter(tag => tag !== clickedTag);

      updateRecordTags(updatedTags);

      form.setFieldsValue({
        tags: updateRecordTags,
      });
    },
    [recordTags, form],
  );

  const handleFormTagsUpdate = useCallback(
    localTags => {
      updateRecordTags(localTags);

      form.setFieldsValue({
        tags: localTags,
      });
    },
    [form],
  );

  if (!isEditing && recordTags.length === 0) {
    return <span>{NO_DATA_PLACEHOLDER}</span>;
  }

  return (
    <div>
      {recordTags.map(tag => (
        <TagWrapper>
          <StyledTag
            closable={isEditing}
            closeIcon={<CloseOutlined onClick={handleCloseTag} name={tag} />}
            color={TAG[tag]?.color}
            key={tag}
            name='tags'
            value={tags}
          >
            {TAG[tag]?.name.toUpperCase()}
          </StyledTag>
        </TagWrapper>
      ))}
      {isEditing && (
        <NewTag
          recordTags={recordTags}
          updateRecordTags={handleFormTagsUpdate}
        />
      )}
    </div>
  );
}
export default TagsRenderer;

TagsRenderer.propTypes = {
  form: instanceOf(Object),
  isEditing: bool,
  tags: instanceOf(Array),
};

TagsRenderer.defaultProps = {
  form: NO_VALUE,
  isEditing: false,
  tags: EMPTY_ARRAY,
};
