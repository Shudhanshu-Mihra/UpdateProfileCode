import { FC, useEffect } from "react";

import { ROUTES } from "constants/routes";
import { DeleteModalWindow } from 'components/DeleteModalWindow';
import { MasterModalPayment } from '../../../components/MasterModalWindow/MasterModalPayment';
import { EmptyData } from 'components/EmptyData';
import { LoaderComponent } from 'components/Loader';
import { useTypesTabState } from './TypesTab.state';
import { TypesTabStyles as Styled } from './TypesTab.style';
// import { TypesContent } from './TypesContent/TypesContent';

import { HeaderPanelMaster } from 'components/HeaderPanelMaster';
import { PaginationPanel } from 'components/PaginationPanel';
import { TableMaster } from 'components/Table/TableMaster';

import { EMPTY_DATA_STRINGS_MASTER as Strings } from "constants/strings";
import { ReUseActionButton } from "ReUseComponents/reUseActionButton/ReUseActionButton";
import { ReUseSearch } from "ReUseComponents/reUseSearch/ReUseSearch";

export const TypesTab: FC = () => {
  const {
    date_format,
    isDeleteModalWindowOpen,
    isDisableButton,
    isLoading,
    isModalWindowOpen,
    modalInputPaymentName,
    onChangePaginationInputValueHandler,
    modalCheckboxDefaultPayment,
    onChangeModalCheckboxDefaultPaymentHandler,
    modalInputPaymentRefName,
    onChangePaymentRefHandler,
    onChangeSearchValueHandler,
    onCreateTypeHandler,
    onEnterCreateTypeClick,
    onDeleteButtonClickHandler,
    onDeleteItemClickHandler,
    onDeleteModalWindowToggle,
    onEditItemClickHandler,
    onGetAllTypesHandler,
    onModalWindowToggle,
    onSaveButtonClickHandler,
    onModalWindowCancelClickButtonHandler,
    searchValue,
    selectedCategory,
    typesList,
    isEdit,
    count,
    onChangeItemsPerPage,
    onChangePaginationInputValue,
    onChangePage,
    onEnterGoToClick,
    onGoToClick,
    onForwardClick,
    onBackwardClick,
    onChangePagesAmount,
    onBlurHandler,
    onFocusSearchHandler,
    currentPage,
    inputPaginationValue,
    itemsPerPage,
    pages,
    debouncedValue,
    isEmptyData,
    isFetchingData,
    isFocus,
    isHeaderPanel,
    isContentLoading,
    searchedItems,
    isSearching,
    active_account,
    userRole,

    setMasterCurrentActionItem,
  } = useTypesTabState();

  useEffect(() => {
    !searchValue &&
      onGetAllTypesHandler({
        take: +itemsPerPage.value,
        skip: currentPage * +itemsPerPage.value,
      });
  }, [searchValue, active_account]);

  useEffect(() => {
    debouncedValue &&
      onGetAllTypesHandler({ search: debouncedValue }, isSearching);
  }, [debouncedValue]);

  useEffect(() => {
    if (!count) return;
    onChangePagesAmount(+itemsPerPage.value, count);
  }, [count, itemsPerPage]);

  const suppliersEmptySet = () => {
		return {
			title: "Payment Method (type) will be shown here...",
			firstSubtitle: "you can create a Payment Method which you use for payment.",
			secondSubtitle: "You can do that by using Upload Receipt button below",
		};
	};

  return (
    <>
      <MasterModalPayment
        isDisableButton={isDisableButton}
        onCloseModalWindowHandler={onModalWindowCancelClickButtonHandler}
        isModalWindowOpen={isModalWindowOpen}
        headerText={isEdit ? 'Edit Payment Method' : 'Add Payment Method'}
        modalInputPaymentName={modalInputPaymentName}
        onChangePaginationInputValueHandler={onChangePaginationInputValueHandler}
        modalInputPaymentRefName = {modalInputPaymentRefName}
        onChangePaymentRefHandler={onChangePaymentRefHandler}
        onEnterCreateItemClick={onEnterCreateTypeClick}  
        onSaveButtonCLickHandler={
          isEdit ? onSaveButtonClickHandler : onCreateTypeHandler
        }
        onChangeModalCheckboxDefaultPaymentHandler={onChangeModalCheckboxDefaultPaymentHandler}
        modalCheckboxDefaultPayment={modalCheckboxDefaultPayment}
        isLoading={isLoading}
      />
      <DeleteModalWindow
        onCloseDeleteModalWindowHandler={onDeleteModalWindowToggle}
        onDeleteButtonClickHandler={onDeleteButtonClickHandler}
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        // deleteItemName={`${selectedCategory?.name}`}
        deleteItemName={setMasterCurrentActionItem?.[2] || ''}
        categoryName="Name"
        isLoading={isLoading}
      />
      {isFetchingData || isContentLoading ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : !typesList?.length &&
        !searchValue &&
        !isFetchingData &&
        !isContentLoading &&
        isEmptyData ? (
        <EmptyData
          title={suppliersEmptySet().title}
          firstSubtitle={suppliersEmptySet().firstSubtitle}
          userRole={userRole}
        >
          <ReUseActionButton displayText="Add Payemnt Method" buttonType="actionButton" widthType="primary" themedButton="primary" onClick={onModalWindowToggle} displayIconType="addPlus"/>
          </EmptyData>
      ) : !isFetchingData ? (
        <Styled.ContentWrapper>
          <Styled.ActionPanelPlaceHolder>
								<ReUseSearch searchValue={searchValue} onChangeSearchValueHandler={onChangeSearchValueHandler} onBlurHandler={onBlurHandler} onFocusSearchHandler={onFocusSearchHandler} />
								{/* isGuard && */ userRole !== "user" ? <ReUseActionButton displayText="Add Payemnt Method" buttonType="actionButton" widthType="primary" themedButton="primary" onClick={onModalWindowToggle} displayIconType="addPlus" margin="0 0 0 auto"/> : null}
					</Styled.ActionPanelPlaceHolder>
      {isContentLoading && isFocus ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : typesList?.length && !isFetchingData && !isContentLoading ? (
        <Styled.TableWrapper>
          <TableMaster
            userRole={userRole}
            tabName={"Name"}
            searchValue={searchValue}
            searchedItems={searchedItems}
            categories={typesList}
            dateFormat={date_format}
            onDeleteIconClickHandler={onDeleteItemClickHandler}
            onEditIconClickHandler={onEditItemClickHandler}
          />
          {(searchValue && searchedItems?.length) ||
            (!searchValue && typesList.length) ? (
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
    </Styled.ContentWrapper>
      ) : null}
    </>
  );
};
