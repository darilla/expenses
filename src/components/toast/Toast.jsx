import { string, oneOfType } from 'prop-types';
import React from 'react';

import { TOAST } from '../../common/constants';

import { StyledAlert } from './Toast.styles';

function Toast({ type, message }) {
  return (
    <StyledAlert closable showIcon message={message} type={TOAST[type].type} />
  );
}

Toast.propTypes = {
  message: oneOfType([string, Node]).isRequired,
  type: string,
};

Toast.defaultProps = {
  type: TOAST.success.type,
};

export default Toast;
