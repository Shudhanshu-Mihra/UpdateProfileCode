import { FC, useEffect } from "react";

import { SettingsItemPageContent } from "components/SettingsItemPageContent";
import { LoaderComponent } from "components/Loader";
import { SuccessPopup } from "components/SuccessPopup";

import { UserListStyles as Styled } from "./UserList.styles";
import { useUserListState } from "./UserList.state";
import { ModalBox } from "./ModalBox";

export const UsersList: FC = () => {
  const {
    isLoading,
    isModalWindowOpen,
    searchValue,
    formik,
    onDeleteModalWindowToggle,
    isDeleteModalWindowOpen,
    onDeleteIconClickHandler,
    onEditIconClickHandler,
    onChangeSearchValueHandler,
    onEnterInsertUser,
    onChangePaginationInputValue,
    onForwardClick,
    onBackwardClick,
    onEnterGoToClick,
    onChangeItemsPerPage,
    onGoToClick,
    userRole,
    onClickDeleteUserButton,
    selectedUserName,
    itemsPerPage,
    inputPaginationValue,
    pages,
    currentPage,
    members,
    isEdit,
    debouncedValue,
    isContentLoading,
    isFocus,
    searchedUsers,
    modalFields,
    count,
    isFetchingData,
    isDisableButton,
    isInvitation,
    isSentSuccessPopup,
    isResentSuccessPopup,
    
    active_account,
    setIsSentSuccessPopup,
    setIsResendSuccessPopup,
    onChangePage,
    onChangePagesAmount,
    onModalWindowCancelClickButtonHandler,
    onModalWindowToggleHandler,
    onFocusSearchHandler,
    onBlurHandler,
    onGetAllCompanyMembersHandler,
    onResendInvitationHandler,
    isPAllChecked,
    permissionState,
    setPermission,
    setPAllChecked,

    PermissionsForAPIHandler,
    role,
  } = useUserListState();

  useEffect(() => {
    !searchValue && onGetAllCompanyMembersHandler();
  }, [searchValue, active_account]);

  useEffect(() => {
    debouncedValue &&
      onGetAllCompanyMembersHandler({
        search: debouncedValue,
      });
  }, [debouncedValue, active_account]);

  useEffect(() => {
    if (!count) return;
    onChangePagesAmount(Number(itemsPerPage.value), count);
  }, [count, itemsPerPage, active_account]);

  return (
    <Styled.Section>
      <ModalBox
        modalFields={
          role?.value === "owner" && !isEdit
            ? modalFields.slice(0, 3)
            : modalFields
        }
        text="Name"
        isLoading={isLoading}
        isDisableButton={isDisableButton}
        onCloseModalWindowHandler={onModalWindowCancelClickButtonHandler}
        onSaveButtonCLickHandler={formik.handleSubmit}
        onEnterCreateItemClick={onEnterInsertUser}
        isModalWindowOpen={isModalWindowOpen}
        headerText={isEdit ? "Edit User" : "Insert User"}
        formikMeta={formik.getFieldMeta}
        formikProps={formik.getFieldProps}
        onCloseDeleteModalWindowHandler={onDeleteModalWindowToggle}
        onDeleteButtonClickHandler={onClickDeleteUserButton}
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        deleteItemName={`‘${selectedUserName}’`}
        isEdit={isEdit}
        isInvitation={isInvitation}
        isUserList
        categoryName="user"
        isPAllChecked={isPAllChecked}
        permissionState = {permissionState}
        // setPermission={setPermission}
        setPAllChecked={setPAllChecked}
        PermissionsForAPIHandler={PermissionsForAPIHandler}
        role={role?.value || null}
      />
      <SuccessPopup
        positionTop="0"
        isShowPopup={isResentSuccessPopup || isSentSuccessPopup}
        closePopupFc={
          isResentSuccessPopup ? setIsResendSuccessPopup : setIsSentSuccessPopup
        }
        titleText={
          isResentSuccessPopup
            ? "Invitation resent successfully"
            : "Invitation sent successfully"
        }
      />
      {isFetchingData ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : (
        <SettingsItemPageContent
          onResendInvitationHandler={onResendInvitationHandler}
          isFetchingData={isFetchingData}
          isContentLoading={isContentLoading}
          isFocus={isFocus}
          searchedUsers={searchedUsers}
          onFocusSearchHandler={onFocusSearchHandler}
          onBlurHandler={onBlurHandler}
          members={members}
          isMemeberList
          userRole={userRole}
          onDeleteIconClickHandler={onDeleteIconClickHandler}
          onEditIconClickHandler={onEditIconClickHandler}
          pages={pages}
          currentPage={currentPage}
          onChangePaginationInputValue={onChangePaginationInputValue}
          onForwardClick={onForwardClick}
          onBackwardClick={onBackwardClick}
          onEnterGoToClick={onEnterGoToClick}
          onChangeItemsPerPage={onChangeItemsPerPage}
          itemsPerPage={itemsPerPage}
          inputPaginationValue={inputPaginationValue}
          onGoToClick={onGoToClick}
          onChangeSearchValueHandler={onChangeSearchValueHandler}
          searchValue={searchValue}
          onAddClickButtonHandler={onModalWindowToggleHandler}
          onChangePage={onChangePage}
          isGuard
        />
      )}
    </Styled.Section>
  );
};
