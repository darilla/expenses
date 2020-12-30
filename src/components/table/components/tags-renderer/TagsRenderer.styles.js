import styled from 'styled-components';
import { Tag } from 'antd';

export const TagWrapper = styled.span`
  display: inline-block;
  margin: 4px;
`;

export const StyledTag = styled(Tag)`
  align-items: center;
  display: inline-flex;
  justify-content: center;

  .ant-tag-close-icon {
    display: inline-flex;
  }
`;

export const StyledNewTag = styled(StyledTag)`
  cursor: pointer;
  height: 30px;
`;
