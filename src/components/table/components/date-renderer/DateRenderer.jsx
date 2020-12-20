import React, { useState, useCallback } from 'react';
import { Modal } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
// @todo - Replace with date-fns.
import moment from 'moment';

import { StyledCalendar, StyledInput, InputInfo } from './DateRenderer.styles';

const CURRENT_DATE = moment();
const DATE_FORMAT = 'Do MMMM YYYY';

function DateRenderer(date, isEditing) {
  const [inputValue, setInputValue] = useState(CURRENT_DATE);
  const [calendarValue, setCalendarValue] = useState(CURRENT_DATE);
  const [isCalendarOpen, openCalendar] = useState(false);
  const [isInputHovered, hoverInput] = useState(false);

  const handleToggleInformation = useCallback(() => {
    hoverInput(!isInputHovered);
  }, [isInputHovered]);

  const handleToggleCalendar = useCallback(() => {
    openCalendar(!isCalendarOpen);
  }, [isCalendarOpen]);

  const handleConfirmModal = useCallback(() => {
    setInputValue(calendarValue);

    handleToggleCalendar();
  }, [calendarValue, handleToggleCalendar]);

  const handleCancelModal = useCallback(() => {
    // Set a value before the calendar was opened.
    setCalendarValue(inputValue);

    handleToggleCalendar();
  }, [inputValue, handleToggleCalendar]);

  const formattedDate = inputValue.format(DATE_FORMAT);

  return (
    <div>
      {isEditing ? (
        <>
          {/* @todo - User should be able to write a new date in the input. */}
          <StyledInput
            readOnly
            addonAfter={<CalendarOutlined onClick={handleToggleCalendar} />}
            onMouseEnter={handleToggleInformation}
            onMouseLeave={handleToggleInformation}
            value={formattedDate}
          />
          <InputInfo isInputHovered={isInputHovered}>
            Select date by clicking on the icon.
          </InputInfo>
          {/* @todo - Opening Modal is causing waring: findDOMNode is deprecated in StrictMode.
              See issue: https://github.com/ant-design/ant-design/issues/27921
          */}
          <Modal
            centered
            onCancel={handleCancelModal}
            onOk={handleConfirmModal}
            visible={isCalendarOpen}
            destroyOnClose
          >
            <StyledCalendar
              fullscreen={false}
              onSelect={setCalendarValue}
              value={calendarValue}
            />
          </Modal>
        </>
      ) : (
        <div>{formattedDate}</div>
      )}
    </div>
  );
}

export default DateRenderer;
