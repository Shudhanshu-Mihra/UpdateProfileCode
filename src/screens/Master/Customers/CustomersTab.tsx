import { FC, useEffect } from 'react';

import { EmptyData } from 'components/EmptyData';
import { LoaderComponent } from 'components/Loader';

import { useCustomersTabState } from './CustomersTab.state';
import { CustomerTabStyles as Styled } from './CustomersTab.style';

import { EMPTY_DATA_STRINGS_MASTER as Strings } from 'constants/strings';
import { CustomersContent } from './CustomersContent/CustomersContent';
import { MasterModalBoxCustomer } from 'components/MasterModalWindowsBox/MasterModalBoxCustomer';
import { ReUseActionButton } from 'ReUseComponents/reUseActionButton/ReUseActionButton';


export const CustomersTab: FC = () => {
  const {
    date_format,
    isLoading,
    isModalWindowOpen,
    modalInputValue,
    onChangeCategoryNameValueHandler,
    onChangeSearchValueHandler,
    onCreateCustomerHandler,
    onEnterCreateCustomerClick,
    onGetCustomerHandler,
    onModalWindowToggle,
    onModalWindowCancelClickButtonHandler,
    searchValue,
    selectedCategory,
    customerList,
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
  } = useCustomersTabState();

  useEffect(() => {
    !searchValue &&
    onGetCustomerHandler({
        take: +itemsPerPage.value,
        skip: currentPage * +itemsPerPage.value,
      });
  }, [searchValue, active_account]);

  useEffect(() => {
    debouncedValue &&
      onGetCustomerHandler({ search: debouncedValue }, isSearching);
  }, [debouncedValue]);

  useEffect(() => {
    if (!count) return;
    onChangePagesAmount(Number(itemsPerPage.value), count);
  }, [count, itemsPerPage]);

  return (
    <>
      <MasterModalBoxCustomer
        isLoading={isLoading}
        onCloseModalWindowHandler={onModalWindowCancelClickButtonHandler}
        onChangeInputValueHandler={onChangeCategoryNameValueHandler}
        onSaveButtonCLickHandler={
          isEdit ? onSaveButtonClickHandler : onCreateCustomerHandler
        }
        isModalWindowOpen={isModalWindowOpen}
        onEnterCreateItemClick={onEnterCreateCustomerClick}
        headerText={
          isEdit ? 'Edit Customer' : 'Add Customer'
        }
        text="Customer Name"
        inputValue={modalInputValue}
        onCloseDeleteModalWindowHandler={onDeleteModalWindowToggle}
        onDeleteButtonClickHandler={onDeleteButtonClickHandler}
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        deleteItemName={`‘${selectedCategory?.name}’`}
        isDisableButton={isDisableButton}
        categoryName="customers"
      />
      {isFetchingData ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : !customerList?.length &&
        !searchValue &&
        !isFetchingData &&
        !isContentLoading &&
        isEmptyData ? (
        <EmptyData
          isUploadFile={false}
          buttonText={Strings.customers.buttonText}
          // firstSubtitle={Strings.customers.firstSubtitle}
          // secondSubtitle={Strings.customers.secondSubtitle}
          //     title={Strings.customers.title}
              firstSubtitle={Strings.customers.thirdSubtitle}
              secondSubtitle={Strings.customers.fourthSubtitle}
              title={Strings.customers.secondTitle}
          onClick={onModalWindowToggle}
          userRole={userRole}
        >
          <ReUseActionButton widthType="primary" buttonType="actionButton" displayText="Add Customer" displayIconType="addPlus" onClick={onModalWindowToggle} />
        </EmptyData>
      ) : !isFetchingData && isHeaderPanel ? (
        <CustomersContent
          userRole={userRole}
          searchedItems={searchedItems}
          isContentLoading={isContentLoading}
          isFetchingData={isFetchingData}
          isFocus={isFocus}
          categories={customerList}
          currentPage={currentPage}
          dateFormat={date_format}
          inputPaginationValue={inputPaginationValue}
          onAddClickButtonHandler={onModalWindowToggle}
          onBackwardClick={onBackwardClick}
          onChangePaginationInputValue={onChangePaginationInputValue}
          onChangeItemsPerPage={onChangeItemsPerPage}
          onChangeSearchValueHandler={onChangeSearchValueHandler}
          onDeleteIconClickHandler={onDeleteItemClickHandler}
          onEditIconClickHandler={onEditItemClickHandler}
          onForwardClick={onForwardClick}
          onEnterGoToClick={onEnterGoToClick}
          onGoToClick={onGoToClick}
          pages={pages}
          itemsPerPage={itemsPerPage}
          searchValue={searchValue}
          tabName="Name"
          onBlurHandler={onBlurHandler}
          onFocusSearchHandler={onFocusSearchHandler}
          onChangePage={onChangePage}
        />
      ) : null}
    </>
  );
};
