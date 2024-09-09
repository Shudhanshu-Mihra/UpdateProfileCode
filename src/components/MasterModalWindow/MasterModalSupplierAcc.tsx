import { FC } from "react";
import ReactModal from "react-modal";

import { Input } from "../Input";
import { ModalButtonsBox } from "../ModalButtonsBox";
import { ModalWindowHeader } from "../ModalWindowHeader";
import {
  MasterModalWindowStyles as Styled,
  MasterModalStyles,
} from "./MasterModalWindow.style";

export const MasterModalSupplierAcc: FC<IMasterModalSupplierAccProps> = (props) => {
  const {
    isModalWindowOpen,
    headerText,
    inputValue,
    inputCodeValue,
    isLoading,
    isDisableButton,
    onCloseModalWindowHandler,
    onChangeInputValueHandler,
    onChangeInputCodeValueHandler,
    onSaveButtonCLickHandler,
    onEnterCreateItemClick,
    text,
    textCode,
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
        <Input
          onChangeValue={onChangeInputValueHandler}
          value={inputValue}
          text={text}
          onKeyDown={onEnterCreateItemClick}
          isRemoveBorder
        />
        <Input
          onChangeValue={onChangeInputCodeValueHandler}
          value={inputCodeValue}
          textCode={textCode}
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
