import styled from 'styled-components';

import { PURPLE, GRAY } from '../../common/colors';

export const Container = styled.nav`
  background: ${GRAY.GRAY_1};
  box-shadow: 1px 1px 1px 1px ${GRAY.GRAY_5};
  display: flex;
  justify-content: flex-end;
  padding: 16px;
`;

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`;

export const Item = styled.li`
  font-size: 1rem;
  padding: 0 16px;

  .ant-typography {
    color: ${({ isActive }) => (isActive ? PURPLE.PURPLE_4 : GRAY.GRAY_9)};

    :hover {
      cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
      color: ${({ isActive }) =>
        isActive ? PURPLE.PURPLE_4 : PURPLE.PURPLE_3};
    }
  }
`;
