import React from 'react';
import { Form, Button, Popconfirm } from 'antd';
import { func, bool } from 'prop-types';

import { Container } from './ActionButtons.styles';

const { Item } = Form;

const BUTTON_TEXT = {
  CANCEL: 'Cancel',
  CONFIRM: 'Confirm',
  DELETE: 'Delete',
};

function ActionButtons({ isEditing, deletePayment, cancelPayment }) {
  const buttonText = isEditing ? BUTTON_TEXT.DELETE : BUTTON_TEXT.CANCEL;

  return (
    <Container>
      <Item>
        {isEditing ? (
          <Popconfirm
            onConfirm={deletePayment}
            title={`Are you sure you want to ${buttonText}`}
          >
            <Button ghost type='danger'>
              {buttonText}
            </Button>
          </Popconfirm>
        ) : (
          <Button ghost type='danger' onClick={cancelPayment}>
            {buttonText}
          </Button>
        )}
      </Item>
      <Item>
        <Button type='primary' htmlType='submit'>
          {BUTTON_TEXT.CONFIRM}
        </Button>
      </Item>
    </Container>
  );
}

ActionButtons.propTypes = {
  cancelPayment: func.isRequired,
  deletePayment: func.isRequired,
  isEditing: bool.isRequired,
};

export default ActionButtons;
