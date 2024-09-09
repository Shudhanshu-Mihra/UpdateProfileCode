import { FC, useEffect } from 'react';

import { EmptyData } from 'components/EmptyData';
import { LoaderComponent } from 'components/Loader';

import { useSuppliersAccTabState } from './SupliersAccTab.state';
import { SupliersAccTabStyles as Styled } from './SupliersAccTab.style';

import { PaginationPanel } from "components/PaginationPanel";
import { TableSupplierAccount } from '../../../components/Table/TableSupplierAccount';
import { ITabContentProps } from "../master.types";

import { EMPTY_DATA_STRINGS_MASTER as Strings } from 'constants/strings';
import { DeleteModalWindow } from 'components/DeleteModalWindow';
import { MasterModalSupplierAcc } from 'components/MasterModalWindow/MasterModalSupplierAcc';
import { ReUseActionButton } from 'ReUseComponents/reUseActionButton/ReUseActionButton';
import { ReUseSearch } from 'ReUseComponents/reUseSearch/ReUseSearch';

export const SupliersAccTab: FC = () => {
  const {
    date_format,
    isLoading,
    isModalWindowOpen,
    modalInputValue,
    modalInputCodeValue,
    onChangeSupplierNameValueHandler,
    onChangeSupplierCodeValueHandler,
    onChangeSearchValueHandler,
    onCreateSupplierHandler,
    onEnterCreateSupplierClick,
    onGetAllSupplierAccountHandler,
    onModalWindowToggle,
    onModalWindowCancelClickButtonHandler,
    searchValue,
    selectedCategory,
    suppliersAccList,
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
    paginationCustomStyle,
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
  } = useSuppliersAccTabState();

  useEffect(() => {
    !searchValue &&
    onGetAllSupplierAccountHandler({
        take: +itemsPerPage.value,
        skip: currentPage * +itemsPerPage.value,
      });
  }, [searchValue, active_account]);

  useEffect(() => {
    debouncedValue &&
    onGetAllSupplierAccountHandler({ search: debouncedValue }, isSearching);
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
      ) : !suppliersAccList?.length &&
        !searchValue &&
        !isFetchingData &&
        !isContentLoading &&
        isEmptyData ? (
        <EmptyData
          isUploadFile={false}
          buttonText={Strings.suppliers.buttonText}
          firstSubtitle={Strings.suppliers.firstSubtitle}
          secondSubtitle={Strings.suppliers.secondSubtitle}
          title={Strings.suppliers.title}
          onClick={onModalWindowToggle}
          userRole={userRole}
        >
          <ReUseActionButton widthType="primary" buttonType="actionButton" displayText="Add Supplier Account" displayIconType="addPlus" onClick={onModalWindowToggle} />
        </EmptyData>
      ) : !isFetchingData && isHeaderPanel ? (
        // <SupplierAccContent
        //   userRole={userRole}
        //   searchedItems={searchedItems}
        //   isContentLoading={isContentLoading}
        //   isFetchingData={isFetchingData}
        //   isFocus={isFocus}
        //   categories={suppliersAccList}
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
        //   paginationCustomStyle={paginationCustomStyle}
        // />

        <Styled.supplierAccountScreenWrapper>
      <Styled.ActionPanelPlaceHolder>
								<ReUseSearch searchValue={searchValue} onChangeSearchValueHandler={onChangeSearchValueHandler} onBlurHandler={onBlurHandler} onFocusSearchHandler={onFocusSearchHandler} />
								{/* isGuard && */ userRole !== "user" ? <ReUseActionButton displayText="Add Supplier Account" buttonType="actionButton" widthType="primary" themedButton="primary" onClick={onModalWindowToggle} displayIconType="addPlus" margin="0 0 0 auto"/> : null}
					</Styled.ActionPanelPlaceHolder>
      {isContentLoading ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : !isFetchingData && !isContentLoading ? (
        <Styled.TableWrapper>
          <TableSupplierAccount
            userRole={userRole}
            tabName={"Name"}
            searchValue={searchValue}
            searchedItems={searchedItems}
            supplierAccountList={suppliersAccList}
            dateFormat={date_format}
            onDeleteIconClickHandler={onDeleteItemClickHandler}
            onEditIconClickHandler={onEditItemClickHandler}
            isContentLoading={isContentLoading}
            isFetchingData={isFetchingData}
            isFocus={isFocus}
          />
          {(searchValue && searchedItems?.length) ||
          (!searchValue && suppliersAccList.length) ? (
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
						paginationCustomStyle={paginationCustomStyle}
					/>
          ) : null}
        </Styled.TableWrapper>
      ) : null}
    </Styled.supplierAccountScreenWrapper>
      ) : null}

      <MasterModalSupplierAcc
        isDisableButton={isDisableButton}
        onCloseModalWindowHandler={onModalWindowCancelClickButtonHandler}
        isModalWindowOpen={isModalWindowOpen}
        headerText={ isEdit ? 'Edit Supplier Account' : 'Add Supplier Account'}
        text={"Supplier Account Name"}
        textCode={"Code"}
        onChangeInputValueHandler={onChangeSupplierNameValueHandler}
        onChangeInputCodeValueHandler={onChangeSupplierCodeValueHandler}
        onSaveButtonCLickHandler={ isEdit ? onSaveButtonClickHandler : onCreateSupplierHandler }
        onEnterCreateItemClick={onEnterCreateSupplierClick}
        inputValue={modalInputValue}
        inputCodeValue={modalInputCodeValue}
        isLoading={isLoading}

      />
      <DeleteModalWindow
        onCloseDeleteModalWindowHandler={onDeleteModalWindowToggle}
        onDeleteButtonClickHandler={onDeleteButtonClickHandler}
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        deleteItemName={`‘${selectedCategory?.name}’`}
        isLoading={isLoading}
        categoryName={"supplier account"}
      />

    </>
  );
};
