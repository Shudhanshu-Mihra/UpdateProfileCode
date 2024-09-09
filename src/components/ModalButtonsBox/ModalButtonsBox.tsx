import { FC } from 'react';

import { Button } from '../Button';

import { ModalButtonsBoxStyles as Styled } from './ModalButtonsBox.style';

interface IModalButtonsBox {
  saveButtonText?: string;
  isNoPadding?: boolean;
  isCancelButton?: boolean;
  isSaveButton?: boolean;
  buttonPosition?: 'flex-end' | 'flex-start';
  type?: 'submit' | 'reset' | 'button';
  isLoading?: boolean;
  isDisableButton?: boolean;
  onSaveButtonCLickHandler?: () => void;
  onCancelClickHandler?: () => void;
}

export const ModalButtonsBox: FC<IModalButtonsBox> = (props) => {
  const {
    onSaveButtonCLickHandler,
    onCancelClickHandler,
    buttonPosition,
    saveButtonText,
    isSaveButton,
    isDisableButton,
    isLoading,
    isNoPadding,
    isCancelButton,
    type,
  } = props;
  return (
    <>
    <Styled.ButtonsBox
      isNoPadding={isNoPadding}
      buttonPosition={buttonPosition}
      isCancelButton={isCancelButton}
    >
      {!isCancelButton && (
          <Button
            onClick={onCancelClickHandler}
            themedButton="roundedWhite"
            width="rounded"
          >
            Cancel
          </Button>
        )}
        <Button
          onClick={onSaveButtonCLickHandler}
          themedButton="roundedRed"
          width="rounded"
          isDisabled={isDisableButton}
          isLoading={isLoading}
          type={type}
        >
          {!!saveButtonText ? saveButtonText : isSaveButton ? 'Save' : 'Send'}
        </Button>
      </Styled.ButtonsBox>
      </>
  );
};
