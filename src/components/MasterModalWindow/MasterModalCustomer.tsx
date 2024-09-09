import { FC } from "react";
import ReactModal from "react-modal";

import { Input } from "../Input";
import { ModalButtonsBox } from "../ModalButtonsBox";
import { ModalWindowHeader } from "../ModalWindowHeader";
import {
  MasterModalWindowStyles as Styled,
  MasterModalStyles,
} from "./MasterModalWindow.style";

export const MasterModalCustomer: FC<IMasterModalCustomerProps> = (props) => {
  const {
    isModalWindowOpen,
    headerText,
    inputValue,
    isLoading,
    isDisableButton,
    onCloseModalWindowHandler,
    onChangeInputValueHandler,
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
        <Input
          onChangeValue={onChangeInputValueHandler}
          value={inputValue}
          text={text}
          onKeyDown={onEnterCreateItemClick}
          isRemoveBorder
          />
          { /* pending*/}
          <Input
          onChangeValue={onChangeInputValueHandler}
          value={inputValue}
          text={"Default VAT"}
          onKeyDown={onEnterCreateItemClick}
          isRemoveBorder
          />
          <Input
          onChangeValue={onChangeInputValueHandler}
          value={inputValue}
          text={"Default Category"}
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
