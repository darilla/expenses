import React, { useCallback, useState } from 'react';
import { oneOfType, string, bool, func, instanceOf } from 'prop-types';
import { Modal as AntdModal } from 'antd';

import { NO_VALUE } from '../../common/constants';

const CANCEL_BUTTON_PROPS = {
  danger: true,
};

function Modal({
  cancelText,
  children,
  confirm,
  handleCancel,
  modalProps,
  title,
  visible,
}) {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleConfirm = useCallback(
    e => {
      setConfirmLoading(true);

      setTimeout(() => {
        if (confirm) {
          confirm(e);
        }
        setConfirmLoading(false);
      }, 2000);
    },
    [confirm],
  );

  return (
    <AntdModal
      cancelButtonProps={CANCEL_BUTTON_PROPS}
      cancelText={cancelText}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      onOk={handleConfirm}
      title={title}
      visible={visible}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...modalProps}
    >
      {children}
    </AntdModal>
  );
}

Modal.propTypes = {
  cancelText: string,
  children: instanceOf(Object),
  confirm: func,
  handleCancel: func.isRequired,
  modalProps: instanceOf(Object),
  title: oneOfType([string, Node]).isRequired,
  visible: bool.isRequired,
};

Modal.defaultProps = {
  cancelText: 'Cancel',
  children: NO_VALUE,
  confirm: NO_VALUE,
  modalProps: {},
};

export default Modal;
