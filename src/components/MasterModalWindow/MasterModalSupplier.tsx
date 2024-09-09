import { FC } from "react";
import ReactModal from "react-modal";

import { Input } from "../Input";
import { ModalButtonsBox } from "../ModalButtonsBox";
import { ModalWindowHeader } from "../ModalWindowHeader";
import {
  MasterModalWindowStyles as Styled,
  MasterModalStyles,
} from "./MasterModalWindow.style";
import { CustomSelect } from "components/CustomSelect";

export const MasterModalSupplier: FC<IMasterModalSupplierProps> = (props) => {
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

    inbuiltCategory,
    // onChangesupplierDefaultCategoryHandler,
    supplierDefaultCategory,
  } = props;
  const sample_text: string = 'VAT';
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
          {/* pendding */}
          <Input
          onChangeValue={onChangeInputValueHandler}
          value={inputValue}
          text={sample_text}
          onKeyDown={onEnterCreateItemClick}
          isRemoveBorder
          />
          <Input
          onChangeValue={onChangeInputValueHandler}
          value={inputValue}
          text={'Category'}
          onKeyDown={onEnterCreateItemClick}
          isRemoveBorder
        />
      {/* <CustomSelect
              value={supplierDefaultCategory}
              options={inbuiltCategory}
              onChangeValueHandler={onChangesupplierDefaultCategoryHandler}
              marginBottom="0px"
              // isDisabled={item.isDisabled}
              isRemoveBorder
            />*/}
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
