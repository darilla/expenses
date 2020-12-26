import React from 'react';
import { func, instanceOf, bool, number } from 'prop-types';
import { Button, Popconfirm } from 'antd';

import { NO_VALUE } from '../../../../common/constants';

import { TABLE_I18N } from '../../constants';

import { StyledButton } from './ActionButtons.styles';

const { SAVE_BTN, CANCEL_BTN, DELETE_BTN, EDIT_BTN } = TABLE_I18N;

const CANCEL_POPUP = 'Sure to cancel?';
const DELETE_POPUP = 'Sure to delete row?';

function ActionButtons({
  editingKey,
  handleCancel,
  handleDelete,
  handleEdit,
  handleSave,
  isRowEditable,
  record,
}) {
  const isButtonDisabled = editingKey !== NO_VALUE;

  return isRowEditable ? (
    <div>
      <Button ghost type='primary' onClick={() => handleSave(record.key)}>
        {SAVE_BTN}
      </Button>
      <Popconfirm title={CANCEL_POPUP} onConfirm={handleCancel}>
        <StyledButton type='dashed' danger>
          {CANCEL_BTN}
        </StyledButton>
      </Popconfirm>
    </div>
  ) : (
    <div>
      <Button disabled={isButtonDisabled} onClick={() => handleEdit(record)}>
        {EDIT_BTN}
      </Button>
      <Popconfirm
        title={DELETE_POPUP}
        onConfirm={() => handleDelete(record.key)}
      >
        <StyledButton ghost disabled={isButtonDisabled} type='danger'>
          {DELETE_BTN}
        </StyledButton>
      </Popconfirm>
    </div>
  );
}

ActionButtons.propTypes = {
  editingKey: number,
  handleCancel: func.isRequired,
  handleDelete: func.isRequired,
  handleEdit: func.isRequired,
  handleSave: func.isRequired,
  isRowEditable: bool,
  record: instanceOf(Object).isRequired,
};

ActionButtons.defaultProps = {
  editingKey: null,
  isRowEditable: false,
};

export default ActionButtons;
