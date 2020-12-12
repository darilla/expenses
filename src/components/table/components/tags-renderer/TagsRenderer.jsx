import React from 'react';

import { TAG } from '../../constants';

import { StyledTag } from './TagsRenderer.styles';

function TagsRenderer(tags) {
  return (
    <>
      {tags?.map(tag => (
        <StyledTag
          closable
          color={TAG[tag]?.color}
          key={tag}
          onClose={() => null}
        >
          {TAG[tag]?.name.toUpperCase()}
        </StyledTag>
      ))}
    </>
  );
}

export default TagsRenderer;
