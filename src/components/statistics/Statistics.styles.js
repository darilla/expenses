import styled from 'styled-components';
import { Card, Row } from 'antd';

export const Cards = styled(Row)`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

export const StyledCard = styled(Card)`
  background-color: transparent;
  border: none;
  width: 200px;

  > div {
    align-items: flex-end;
    display: flex;
    width: 100%;
  }

  svg {
    margin-bottom: 10px;
  }
`;

export const ChartWrapper = styled.div`
  height: 450px;
`;
