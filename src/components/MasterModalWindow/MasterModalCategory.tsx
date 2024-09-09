import { FC } from 'react';
import ReactModal from 'react-modal';

import { Input } from '../Input';
import { ModalButtonsBox } from '../ModalButtonsBox';
// import { ModalWindowHeader } from '../ModalWindowHeader';
import {
  MasterModalWindowStyles as Styled,
  MasterModalStyles,
} from './MasterModalWindow.style';
import { ReactComponent as Close } from 'assets/icons/close.svg';

export const MasterModalCategory: FC<IMasterModalWindowProps> = (props) => {
  const {
    isModalWindowOpen,
    headerText,
    inputValue,
    isLoading,
    isDisableButton,
    onCloseModalWindowHandler,
    onChangePaginationInputValueHandler,
    onSaveButtonCLickHandler,
    onEnterCreateItemClick,
    text,
  } = props;
  return (
    <ReactModal
      isOpen={isModalWindowOpen}
      onRequestClose={onCloseModalWindowHandler}
      ariaHideApp={false}
      style={MasterModalStyles}
    >
      <Styled.ModalMasterContentWrapper>
      <Styled.HeaderBox>
        <Styled.Title>{headerText}</Styled.Title>
      </Styled.HeaderBox>
      <Styled.MainContentWrapper>
      <Styled.CloseIconWrapper>
          <Close width={18} onClick={onCloseModalWindowHandler} />
          </Styled.CloseIconWrapper>
        <Input
          onChangeValue={onChangePaginationInputValueHandler}
          value={inputValue}
          text={text}
          onKeyDown={onEnterCreateItemClick}
          isRemoveBorder
        />
      </Styled.MainContentWrapper>
      <ModalButtonsBox
        isLoading={isLoading}
        onCancelClickHandler={onCloseModalWindowHandler}
        onSaveButtonCLickHandler={onSaveButtonCLickHandler}
        isSaveButton
        isDisableButton={isDisableButton}
      />
      </Styled.ModalMasterContentWrapper>
    </ReactModal>
  );
};
