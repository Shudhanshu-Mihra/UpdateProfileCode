import { FC, useEffect } from "react";

import { EmptyData } from "components/EmptyData";
import { LoaderComponent } from "components/Loader";

import { useCustomerAccTabState } from "./CustomerAccTab.state";
import { CustomerAccTabStyles as Styled } from "./CustomerAccTab.style";

import { DeleteModalWindow } from 'components/DeleteModalWindow';
import { MasterModalCustomerAcc } from 'components/MasterModalWindow/MasterModalCustomerAcc';

import { EMPTY_DATA_STRINGS_MASTER as Strings } from "constants/strings";
import { TableCustomerAccount } from "components/Table/TableCustomerAccount";
import { PaginationPanel } from "components/PaginationPanel";

import { ReUseActionButton } from "ReUseComponents/reUseActionButton/ReUseActionButton";
import { ReUseSearch } from "ReUseComponents/reUseSearch/ReUseSearch";

export const CustomerAccTab: FC = () => {
  const {
    date_format,
    isLoading,
    isModalWindowOpen,
    modalInputValue,
    modalInputCodeValue,
    onChangeCustomerNameValueHandler,
    onChangeCustomerCodeValueHandler,
    onChangeSearchValueHandler,
    onCreateCustomerAccHandler,
    onEnterCreateCustomerAccClick,
    onGetCustomerAccHandler,
    onModalWindowToggle,
    onModalWindowCancelClickButtonHandler,
    searchValue,
    selectedCategory,
    customersAccList,
    isEdit,
    count,
    isDeleteModalWindowOpen,
    onDeleteModalWindowToggle,
    onDeleteItemClickHandler,
    onDeleteButtonClickHandler,
    onEditItemClickHandler,
    isDisableButton,
    onSaveButtonClickHandler,
    onChangeItemsPerPage,
    onChangePaginationInputValue,
    onChangePage,
    onEnterGoToClick,
    onGoToClick,
    onForwardClick,
    onBackwardClick,
    onChangePagesAmount,
    currentPage,
    inputPaginationValue,
    itemsPerPage,
    pages,
    onBlurHandler,
    onFocusSearchHandler,
    debouncedValue,
    isContentLoading,
    isFocus,
    isFetchingData,
    isEmptyData,
    isHeaderPanel,
    isSearching,
    searchedItems,
    active_account,
    userRole,
  } = useCustomerAccTabState();

  useEffect(() => {
    !searchValue &&
      onGetCustomerAccHandler({
        take: +itemsPerPage.value,
        skip: currentPage * +itemsPerPage.value,
      });
  }, [searchValue, active_account]);

  useEffect(() => {
    debouncedValue &&
      onGetCustomerAccHandler({ search: debouncedValue }, isSearching);
  }, [debouncedValue]);

  useEffect(() => {
    if (!count) return;
    onChangePagesAmount(Number(itemsPerPage.value), count);
  }, [count, itemsPerPage]);

  return (
    <>
      <MasterModalCustomerAcc
        isDisableButton={isDisableButton}
        onCloseModalWindowHandler={onModalWindowCancelClickButtonHandler}
        isModalWindowOpen={isModalWindowOpen}
        headerText={isEdit ? "Edit Customer Account" : "Add Customer Account"}
        text={"Customer Account Name"}
        textCode={"Code"}
        onChangeInputValueHandler={onChangeCustomerNameValueHandler}
        onChangeInputCodeValueHandler={onChangeCustomerCodeValueHandler}
        onSaveButtonCLickHandler={isEdit ? onSaveButtonClickHandler : onCreateCustomerAccHandler}
        onEnterCreateItemClick={onEnterCreateCustomerAccClick}
        inputValue={modalInputValue}
        inputCodeValue={modalInputCodeValue}
        isLoading={isLoading}
      />
      <DeleteModalWindow
        onCloseDeleteModalWindowHandler={onDeleteModalWindowToggle}
        onDeleteButtonClickHandler={onDeleteButtonClickHandler}
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        // deleteItemName={`‘${selectedCategory?.name}’`}
        deleteItemName={`‘Test’`}
        isLoading={isLoading}
        categoryName={"customer account"}
      />
      {isFetchingData ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : !customersAccList?.length &&
        !searchValue &&
        !isFetchingData &&
        !isContentLoading &&
        isEmptyData ? (
        <EmptyData
          isUploadFile={false}
          buttonText={Strings.customers.buttonText}
          firstSubtitle={Strings.customers.firstSubtitle}
          secondSubtitle={Strings.customers.secondSubtitle}
          title={Strings.customers.title}
          onClick={onModalWindowToggle}
          userRole={userRole}
        >
          <ReUseActionButton displayText="Add Customer Account" buttonType="actionButton" widthType="primary" themedButton="primary" onClick={onModalWindowToggle} displayIconType="addPlus" />
        </EmptyData>
      ) : !isFetchingData && isHeaderPanel ? (
        // <CustomerAccContent
        //   userRole={userRole}
        //   searchedItems={searchedItems}
        //   isContentLoading={isContentLoading}
        //   isFetchingData={isFetchingData}
        //   isFocus={isFocus}
        //   categories={customersAccList}
        //   currentPage={currentPage}
        //   dateFormat={date_format}
        //   inputPaginationValue={inputPaginationValue}
        //   onAddClickButtonHandler={onModalWindowToggle}
        //   onBackwardClick={onBackwardClick}
        //   onChangePaginationInputValue={onChangePaginationInputValue}
        //   onChangeItemsPerPage={onChangeItemsPerPage}
        //   onChangeSearchValueHandler={onChangeSearchValueHandler}
        //   onDeleteIconClickHandler={onDeleteItemClickHandler}
        //   onEditIconClickHandler={onEditItemClickHandler}
        //   onForwardClick={onForwardClick}
        //   onEnterGoToClick={onEnterGoToClick}
        //   onGoToClick={onGoToClick}
        //   pages={pages}
        //   itemsPerPage={itemsPerPage}
        //   searchValue={searchValue}
        //   tabName="Name"
        //   onBlurHandler={onBlurHandler}
        //   onFocusSearchHandler={onFocusSearchHandler}
        //   onChangePage={onChangePage}
        // />

        <Styled.customerAccountScreenWrapper>
      {/* <HeaderPanelMaster
        isGuard
        onChangeSearchValueHandler={onChangeSearchValueHandler}
        searchValue={searchValue}
        onAddClickButtonHandler={onAddClickButtonHandler}
        onBlurHandler={onBlurHandler}
        onFocusSearchHandler={onFocusSearchHandler}
        buttonText="Add Customer Account"
        userRole={userRole}
      /> */}
      <Styled.ActionPanelPlaceHolder>
								<ReUseSearch searchValue={searchValue} onChangeSearchValueHandler={onChangeSearchValueHandler} onBlurHandler={onBlurHandler} onFocusSearchHandler={onFocusSearchHandler} />
								{/* isGuard && */ userRole !== "user" ? <ReUseActionButton displayText="Add Customer Account" buttonType="actionButton" widthType="primary" themedButton="primary" onClick={onModalWindowToggle} displayIconType="addPlus" margin="0 0 0 auto"/> : null}
					</Styled.ActionPanelPlaceHolder>
      {isContentLoading && isFocus ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : !isFetchingData && !isContentLoading ? (
        <Styled.TableWrapper>
          <TableCustomerAccount
            userRole={userRole}
            tabName={"Name"}
            searchValue={searchValue}
            searchedItems={searchedItems}
            categories={customersAccList}
            dateFormat={date_format}
            onDeleteIconClickHandler={onDeleteItemClickHandler}
            onEditIconClickHandler={onEditItemClickHandler}
          />
          {(searchValue && searchedItems?.length) ||
          (!searchValue && customersAccList.length) ? (
            <PaginationPanel
						pages={pages}
						currentPage={currentPage}
						onChangeItemsPerPage={onChangeItemsPerPage}
						onChangePaginationInputValue={onChangePaginationInputValue}
						inputPaginationValue={inputPaginationValue}
						itemsPerPage={itemsPerPage}
						onChangePage={onChangePage}
						onEnterGoToClick={onEnterGoToClick}
						onGoToClick={onGoToClick}
						onForwardClick={onForwardClick}
						onBackwardClick={onBackwardClick}
						// paginationCustomStyle={paginationCustomStyle}
					/>
          ) : null}
        </Styled.TableWrapper>
      ) : null}
    </Styled.customerAccountScreenWrapper>
      ) : null}
    </>
  );
};
