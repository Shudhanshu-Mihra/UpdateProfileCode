import { styled } from 'styles/theme';

import { overlay, modalContentStyles } from 'constants/modal-window.constants';

export const EmailModalStyles = {
  content: {
    ...modalContentStyles,
    maxWidth: '420px',
    maxHeight: '640px',
  },
  overlay,
};

export const Styles = {
  Form: styled.form``,
};
