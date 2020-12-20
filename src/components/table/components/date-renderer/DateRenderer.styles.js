import styled from 'styled-components';
import { Calendar, Input } from 'antd';

export const StyledCalendar = styled(Calendar)`
  .ant-picker-calendar-header {
    display: flex;
    justify-content: flex-start;
    padding-top: 32px;
  }

  tr {
    height: 50px;

    th {
      font-weight: 600;
    }
  }
`;

export const StyledInput = styled(Input)`
  .ant-input {
    cursor: default;

    :hover,
    :focus {
      border: 1px solid #d9d9d9 !important;
      box-shadow: none !important;
    }
  }

  svg:hover {
    fill: #40a9ff;
  }
`;

export const InputInfo = styled.span`
  font-size: 0.8rem;
  padding-left: 5px;
  visibility: ${({ isInputHovered }) =>
    isInputHovered ? 'visible' : 'hidden'};
`;
