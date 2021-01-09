import styled from 'styled-components';
import { Form } from 'antd';

const { Item } = Form;

export const StyledItem = styled(Item)`
  .ant-select-selection-item {
    align-items: center;
    display: flex;

    > span {
      padding-right: 8px;
    }
  }
`;
