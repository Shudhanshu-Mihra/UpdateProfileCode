import { FC } from 'react';

import { DeleteModalWindow } from 'components/DeleteModalWindow';
import { MasterModalCustomerAcc } from 'components/MasterModalWindow/MasterModalCustomerAcc';

export const MasterModalBoxCustomerAcc: FC<IModalBoxCustomerAcc> = (props) => {
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
      <MasterModalCustomerAcc
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
