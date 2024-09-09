import React, { RefObject } from 'react';

import { Icon } from 'components/Icons/Icons';

import { DateButtonStyles } from './DateButton.style';

export type DateButtonStyleProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: string;
  datePickerRef?: RefObject<HTMLButtonElement>;
  isOpen?: boolean;
  isInputDate: boolean;
};

export const DateButton = (props: DateButtonStyleProps) => {
  const { children, onClick, isInputDate, datePickerRef, isOpen } = props;
  return (
    <DateButtonStyles.Button
      type="button"
      onClick={onClick}
      isInputDate={isInputDate}
      ref={datePickerRef}
      isOpen={isOpen}
    >
      {children}
      <DateButtonStyles.IconWrapper>
        <Icon type="calendar" />
      </DateButtonStyles.IconWrapper>
    </DateButtonStyles.Button>
  );
};
