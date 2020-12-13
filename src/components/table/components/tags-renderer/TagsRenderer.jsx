import React from 'react';

import { NO_DATA_PLACEHOLDER, TAG } from '../../constants';

import { StyledTag } from './TagsRenderer.styles';

function TagsRenderer(tags) {
  return (
    <>
      {tags.length > 0
        ? tags.map(tag => (
            <StyledTag
              closable
              color={TAG[tag]?.color}
              key={tag}
              onClose={() => null}
            >
              {TAG[tag]?.name.toUpperCase()}
            </StyledTag>
          ))
        : NO_DATA_PLACEHOLDER}
    </>
  );
}

export default TagsRenderer;
