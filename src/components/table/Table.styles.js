import styled from 'styled-components';
import { Button } from 'antd';

import { PURPLE } from '../../common/colors';

const CELL_PADDING_PX = '8px';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .ant-table-tbody td.ant-table-cell {
    height: 117px;
    padding: ${CELL_PADDING_PX};
  }

  .ant-table-row > td.ant-table-cell > div {
    height: 100%;
    margin: 0;
  }

  .ant-picker {
    width: 70%;
  }

  .ant-tag {
    margin: 0;
  }

  /* Style for action cell. */
  .ant-table-row td:last-child {
    padding: ${CELL_PADDING_PX};
  }

  /* Fix for tags cell so it's aligned with other cells. */
  .ant-table-cell > div > div {
    height: 100%;
  }

  /* Set height for all components wrappers. */
  .ant-col .ant-form-item-control {
    height: 35px;
  }
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
