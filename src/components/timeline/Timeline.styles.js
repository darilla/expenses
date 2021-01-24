import styled from 'styled-components';

import { NAV_HEIGHT } from '../../common/constants';
import { PURPLE } from '../../common/colors';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${NAV_HEIGHT});
  padding-top: 32px;

  // Remove white background from icons.
  .ant-timeline-item-head-custom,
  .ant-btn-icon-only {
    background: transparent;
    border: none;
  }

  .payment-btn {
    align-items: center;
    background: ${PURPLE.PURPLE_5};
    border: ${PURPLE.PURPLE_7};
    display: flex;
    justify-content: center;
    margin-bottom: 16px;

    :hover,
    :active,
    :focus {
      background: ${PURPLE.PURPLE_6};
    }
  }

  ul {
    width: 20vw;
  }
`;
