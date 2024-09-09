import { FC } from 'react';

import { DeleteModalWindow } from 'components/DeleteModalWindow';
import { MasterModalSupplierAcc } from 'components/MasterModalWindow/MasterModalSupplierAcc';

export const MasterModalBoxSupplierAcc: FC<IModalBoxSupplierAcc> = (props) => {
  const {
    deleteItemName,
    headerText,
    text,
    textCode,
    inputValue,
    inputCodeValue,
    isLoading,
    isModalWindowOpen,
    onChangeInputValueHandler,
    onChangeInputCodeValueHandler,
    onCloseModalWindowHandler,
    onDeleteButtonClickHandler,
    onSaveButtonCLickHandler,
    onEnterCreateItemClick,
    isDeleteModalWindowOpen,
    onCloseDeleteModalWindowHandler,
    isDisableButton,
    categoryName,
  } = props;
  return (
    <>
      <MasterModalSupplierAcc
        isDisableButton={isDisableButton}
        onCloseModalWindowHandler={onCloseModalWindowHandler}
        isModalWindowOpen={isModalWindowOpen}
        headerText={headerText}
        text={text}
        textCode={textCode}
        onChangeInputValueHandler={onChangeInputValueHandler}
        onChangeInputCodeValueHandler={onChangeInputCodeValueHandler}
        onSaveButtonCLickHandler={onSaveButtonCLickHandler}
        onEnterCreateItemClick={onEnterCreateItemClick}
        inputValue={inputValue}
        inputCodeValue={inputCodeValue}
        isLoading={isLoading}

      />
      <DeleteModalWindow
        onCloseDeleteModalWindowHandler={onCloseDeleteModalWindowHandler}
        onDeleteButtonClickHandler={onDeleteButtonClickHandler}
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        deleteItemName={deleteItemName}
        isLoading={isLoading}
        categoryName={categoryName}
      />
    </>
  );
};
