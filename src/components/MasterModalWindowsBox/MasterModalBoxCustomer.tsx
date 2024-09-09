import { FC } from 'react';

import { DeleteModalWindow } from 'components/DeleteModalWindow';
import { MasterModalCustomer } from 'components/MasterModalWindow/MasterModalCustomer';

export const MasterModalBoxCustomer: FC<IModalBoxCustomer> = (props) => {
  const {
    deleteItemName,
    headerText,
    text,
    inputValue,
    isLoading,
    isModalWindowOpen,
    onChangeInputValueHandler,
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
      <MasterModalCustomer
        isDisableButton={isDisableButton}
        onCloseModalWindowHandler={onCloseModalWindowHandler}
        isModalWindowOpen={isModalWindowOpen}
        headerText={headerText}
        text={text}
        onChangeInputValueHandler={onChangeInputValueHandler}
        onSaveButtonCLickHandler={onSaveButtonCLickHandler}
        onEnterCreateItemClick={onEnterCreateItemClick}
        inputValue={inputValue}
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
