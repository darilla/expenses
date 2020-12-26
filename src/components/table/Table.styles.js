import styled from 'styled-components';
import { Button } from 'antd';

import { PURPLE } from '../../common/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const StyledAddRowButton = styled(Button)`
  background-color: ${PURPLE.PURPLE_4};
  border-radius: 5px;
  border: 2px solid ${PURPLE.PURPLE_4};
  font-size: 1.05rem;
  height: 40px;
  margin: 16px;
  width: 150px;

  :hover {
    background: ${PURPLE.PURPLE_6};
    border: 2px solid ${PURPLE.PURPLE_6};
    box-shadow: 0 0 2px ${PURPLE.PURPLE_6};
  }

  :active {
    background: ${PURPLE.PURPLE_8};
    border: 2px solid ${PURPLE.PURPLE_8};
    box-shadow: 0 0 2px ${PURPLE.PURPLE_8};
  }
`;
