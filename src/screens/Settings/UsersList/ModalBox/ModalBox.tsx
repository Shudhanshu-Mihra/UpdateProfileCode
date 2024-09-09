import { FC } from 'react';
import { FieldInputProps, FieldMetaProps } from 'formik';

import { DeleteModalWindow } from 'components/DeleteModalWindow';
import { InsertUserModalWindow } from 'components/InsertUserModalWindow';
import {PermissionProps} from '../../../../components/InsertUserModalWindow/InsertUserModalWindow.type';
import { TInputFields } from '../../MyAccount/types/MyAccount.types';

interface IUserListModalBoxProps
  extends PermissionProps, Omit<
    IModalWindowsBox,
    'onSaveButtonCLickHandler' | 'onChangePaginationInputValueHandler' | 'inputValue'
  > {
  onSaveButtonCLickHandler: (
    e?: React.FormEvent<HTMLFormElement> | undefined
  ) => void;
  formikMeta: (name: string) => FieldMetaProps<string>;
  formikProps: (nameOrOptions: string) => FieldInputProps<string>;
  modalFields: TInputFields;
  isEdit: boolean;
  isInvitation: boolean;
  isUserList: boolean;
  PermissionsForAPIHandler: (selectedPermission: any[]) => void;
  role:string | null;
}
export const ModalBox: FC<IUserListModalBoxProps> = (props) => {
  const {
    deleteItemName,
    headerText,
    isDeleteModalWindowOpen,
    isLoading,
    isModalWindowOpen,
    isDisableButton,
    isUserList,
    onCloseModalWindowHandler,
    onDeleteButtonClickHandler,
    formikMeta,
    formikProps,
    modalFields,
    onSaveButtonCLickHandler,
    onEnterCreateItemClick,
    onCloseDeleteModalWindowHandler,
    isEdit,
    isInvitation,
    categoryName,
    // isAllChecked,
    onCheckedAllItemsHandler,

    isPAllChecked,
    permissionState,
    setPAllChecked,

    PermissionsForAPIHandler,
    role,
  } = props;

  return (
    <>
      <InsertUserModalWindow
        modalFields={modalFields}
        text="Name"
        isLoading={isLoading}
        isDisableButton={isDisableButton}
        onCloseModalWindowHandler={onCloseModalWindowHandler}
        onSaveButtonCLickHandler={onSaveButtonCLickHandler}
        onEnterCreateItemClick={onEnterCreateItemClick}
        isModalWindowOpen={isModalWindowOpen}
        headerText={headerText}
        formikMeta={formikMeta}
        formikProps={formikProps}
        isEdit={isEdit}
        isInvitation={isInvitation}
        isUserList={isUserList}
        // isAllChecked={isAllChecked}
        // onCheckedAllItemsHandler={onCheckedAllItemsHandler}
        isPAllChecked={isPAllChecked}
        permissionState = {permissionState}
        // setPermission={setPermission}
        setPAllChecked={setPAllChecked}
        PermissionsForAPIHandler={PermissionsForAPIHandler}
        role={role}
      />
      <DeleteModalWindow
        isLoading={isLoading}
        onCloseDeleteModalWindowHandler={onCloseDeleteModalWindowHandler}
        onDeleteButtonClickHandler={onDeleteButtonClickHandler}
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        deleteItemName={`‘${deleteItemName}’`}
        categoryName={categoryName}
      />
    </>
  );
};
