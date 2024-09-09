import { FC } from 'react';

import { Button } from 'components/Button';
import { ModalButtonsBox } from 'components/ModalButtonsBox';

import { ButtonsStyles as Styled } from './Buttons.style';
import { ReUseActionButton } from 'ReUseComponents/reUseActionButton/ReUseActionButton';

interface IButtons {
  settingsButtonText: string;
  onClickSettingsButtonHandler: () => void;
  onCancelbuttonClickHandler: () => void;
  isDisabledButton: boolean;
  isLoading: boolean;
  isCancelButton: boolean;
}

export const Buttons: FC<IButtons> = (props) => {
  const {
    onClickSettingsButtonHandler,
    onCancelbuttonClickHandler,
    isCancelButton,
    settingsButtonText,
    isDisabledButton,
    isLoading,
  } = props;
  return (
    <Styled.ButtonsWrapper>
      <ReUseActionButton widthType='rounded' displayText={settingsButtonText} themedButton='roundedWhite' buttonType="actionButton" onClick={onClickSettingsButtonHandler}/>
      {/* <ModalButtonsBox
        buttonPosition="flex-end"
        onCancelClickHandler={onCancelbuttonClickHandler}
        isNoPadding
        isSaveButton
        isCancelButton={isCancelButton}
        isLoading={isLoading}
        isDisableButton={isDisabledButton}
        type="submit"
      /> */}
      <Styled.ButtonsBox
      isNoPadding={true}
      buttonPosition='flex-end'
      isCancelButton={isCancelButton}
    >
      {/* {!isCancelButton && (
          <Button
            onClick={onCancelbuttonClickHandler}
            themedButton="roundedWhite"
            width="rounded"
          >
            Cancel
          </Button>
        )} */}
        {/* <Button
          onClick={onClickSettingsButtonHandler}
          themedButton="roundedRed"
          width="rounded"
          isDisabled={isDisabledButton}
          isLoading={isLoading}
          // type={type}
        > */}
          {/* {!!saveButtonText ? saveButtonText : isSaveButton ? 'Save' : 'Send'} */}
          {/* {'Set Password'} */}
        {/* </Button> */}
    </Styled.ButtonsBox>
    </Styled.ButtonsWrapper>
  );
};
