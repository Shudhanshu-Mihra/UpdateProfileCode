import { FC, useEffect } from 'react';

import { EmptyData } from 'components/EmptyData';
import { LoaderComponent } from 'components/Loader';

import { MasterModalSupplier } from 'components/MasterModalWindow/MasterModalSupplier';
import { DeleteModalWindow } from 'components/DeleteModalWindow';

import { useSupplierTabState } from './SupplierTab.state';
import { SupplierTabStyles as Styled } from './SupplierTab.style';

import { EMPTY_DATA_STRINGS_MASTER as Strings } from 'constants/strings';
import { SupplierContent } from './SupplierContent/SupplierContent';
import { ReUseActionButton } from 'ReUseComponents/reUseActionButton/ReUseActionButton';
import { ReUseSearch } from 'ReUseComponents/reUseSearch/ReUseSearch';
import { PaginationPanel } from 'components/PaginationPanel';
import { TableSupplier } from 'components/Table/TableSupplier';

export const SupplierTab: FC = () => {
  const {
    date_format,
    isLoading,
    isModalWindowOpen,
    modalInputValue,
    onChangeCategoryNameValueHandler,
    onChangeSearchValueHandler,
    onCreateSupplierHandler,
    onEnterCreateSupplierClick,
    onGetSupplierHandler,
    onModalWindowToggle,
    onModalWindowCancelClickButtonHandler,
    searchValue,
    selectedCategory,
    suppliersList,
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

    inbuiltCategory,
    // onChangesupplierDefaultCategoryHandler,
    // supplierDefaultCategory,
  } = useSupplierTabState();

  useEffect(() => {
    !searchValue &&
    onGetSupplierHandler({
        take: +itemsPerPage.value,
        skip: currentPage * +itemsPerPage.value,
      });
  }, [searchValue, active_account]);

  useEffect(() => {
    debouncedValue &&
      onGetSupplierHandler({ search: debouncedValue }, isSearching);
  }, [debouncedValue]);

  useEffect(() => {
    if (!count) return;
    onChangePagesAmount(Number(itemsPerPage.value), count);
  }, [count, itemsPerPage]);

  return (
    <>
      {isFetchingData ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : !suppliersList?.length &&
        !searchValue &&
        !isFetchingData &&
        !isContentLoading &&
        isEmptyData ? (
        <EmptyData
          isUploadFile={false}
          buttonText={Strings.suppliers.buttonText}
          // firstSubtitle={Strings.suppliers.firstSubtitle}
          thirdSubtitle={Strings.suppliers.thirdSubtitle}
          // secondSubtitle={Strings.suppliers.secondSubtitle}
       fourthSubtitle={Strings.suppliers.fourthSubtitle}
          // title={Strings.suppliers.title}
          title={Strings.suppliers.titleSecond}
          onClick={onModalWindowToggle}
          userRole={userRole}
        >
          <ReUseActionButton widthType="primary" buttonType="actionButton" displayText="Add Supplier" displayIconType="addPlus" onClick={onModalWindowToggle} />
        </EmptyData>
      ) : !isFetchingData && isHeaderPanel ? (
        // <SupplierContent
        //   userRole={userRole}
        //   searchedItems={searchedItems}
        //   isContentLoading={isContentLoading}
        //   isFetchingData={isFetchingData}
        //   isFocus={isFocus}
        //   categories={suppliersList}
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

        <Styled.supplierScreenWrapper>
        {/* <HeaderPanelMaster
          isGuard
          onChangeSearchValueHandler={onChangeSearchValueHandler}
          searchValue={searchValue}
          onAddClickButtonHandler={onAddClickButtonHandler}
          onBlurHandler={onBlurHandler}
          onFocusSearchHandler={onFocusSearchHandler}
          buttonText="Add Supplier"
          userRole={userRole}
        /> */}
        <Styled.ActionPanelPlaceHolder>
								<ReUseSearch searchValue={searchValue} onChangeSearchValueHandler={onChangeSearchValueHandler} onBlurHandler={onBlurHandler} onFocusSearchHandler={onFocusSearchHandler} />
								{/* isGuard && */ userRole !== "user" ? <ReUseActionButton displayText="Add Supplier" buttonType="actionButton" widthType="primary" themedButton="primary" onClick={onModalWindowToggle} displayIconType="addPlus" margin="0 0 0 auto"/> : null}
					</Styled.ActionPanelPlaceHolder>
        {isContentLoading && isFocus ? (
          <Styled.LoaderWrapper>
            <LoaderComponent theme="preview" />
          </Styled.LoaderWrapper>
        ) : !isFetchingData && !isContentLoading ? (
          <Styled.TableWrapper>
            <TableSupplier
              userRole={userRole}
              tabName={"Name"}
              searchValue={searchValue}
              searchedItems={searchedItems}
              categories={suppliersList}
              dateFormat={date_format}
              onDeleteIconClickHandler={onDeleteItemClickHandler}
              onEditIconClickHandler={onEditItemClickHandler}
            />
            {(searchValue && searchedItems?.length) ||
            (!searchValue && suppliersList.length) ? (
              <PaginationPanel
                pages={pages}
                currentPage={currentPage}
                onChangeItemsPerPage={onChangeItemsPerPage}
                itemsPerPage={itemsPerPage}
                onChangePaginationInputValue={onChangePaginationInputValue}
                inputPaginationValue={inputPaginationValue}
                onChangePage={onChangePage}
                onEnterGoToClick={onEnterGoToClick}
                onGoToClick={onGoToClick}
                onForwardClick={onForwardClick}
                onBackwardClick={onBackwardClick}
              />
            ) : null}
          </Styled.TableWrapper>
        ) : null}
      </Styled.supplierScreenWrapper>
      ) : null}

      <MasterModalSupplier
        isDisableButton={isDisableButton}
        onCloseModalWindowHandler={onModalWindowCancelClickButtonHandler}
        isModalWindowOpen={isModalWindowOpen}
        headerText={ isEdit ? 'Edit Supplier' : 'Add Supplier' }
        onChangeInputValueHandler={onChangeCategoryNameValueHandler}
        text={"Supplier Name"}
        inbuiltCategory={inbuiltCategory}
        // onChangesupplierDefaultCategoryHandler={onChangesupplierDefaultCategoryHandler}
        // supplierDefaultCategory={supplierDefaultCategory}
        // onChangeInputValueHandler={onChangeInputValueHandler}
        onSaveButtonCLickHandler={ isEdit ? onSaveButtonClickHandler : onCreateSupplierHandler }
        onEnterCreateItemClick={onEnterCreateSupplierClick}
        inputValue={modalInputValue}
        isLoading={isLoading}
      />
      <DeleteModalWindow
        onCloseDeleteModalWindowHandler={onDeleteModalWindowToggle}
        onDeleteButtonClickHandler={onDeleteButtonClickHandler}
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        deleteItemName={`‘${selectedCategory?.name}’`}
        isLoading={isLoading}
        categoryName={"supplier"}
      />

    </>
  );
};
