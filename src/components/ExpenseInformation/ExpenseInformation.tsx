import React, { FC, useEffect, useState } from 'react';
import { FieldsBox } from './FieldsBox';
import { usePhotoDetailsContentState } from './ExpenseDetailsContent.state';
import { ExpenseDetailsContentStyles as Styled } from './ExpenseDetailsContent.style';
import { ExpenseDetailsTabs } from 'screens/ExpenseDetails/ExpenseDetailsTabs';
import { TableInboxAdmin } from 'components/Table/TableInboxAdmin';
import { receipts } from 'components/EmailModalWindow/constants';
import { useInboxState } from 'screens/Inbox/Inbox.state';
import PurchaseTable from 'components/Purchases/PurchasesTable';
import { PaginationPanel } from 'components/PaginationPanel';
import { TableExpenseDetails } from 'components/TableExpenseDetails';

export const ExpenseInformation: FC = () => {
  const [activeTab, setActiveTab] = useState<'reportDetails' | 'history'>('reportDetails');

  const {
    inputFields,
    statusValue,
    dateValue,
    isOpen,
    isLoading,
    datePickerRef,
    onClickOutsideDatePickerHandler,
    onDatePickerClickHandler,
    onGetAllMasterItemsHandler,
    onForbiddenCharacterClick,
  } = usePhotoDetailsContentState();

  useEffect(() => {
    onGetAllMasterItemsHandler();
  }, []);

  const {
    onSelectFilesHandler,
    onFetchReceiptsHandler,
    onChangeStatusValueHandler,
    onChangeDateFilterValueHandler,
    onChangeSearchValueHandler,
    onChangeDate,
    isDatePickerOpen,
    searchValue,
    dateFilterValue,
    isInputDate,
    setIsDatePickerOpen,
    isEmailModalWindowOpen,
    onEmailClick,
    formik,
    onChangeItemsPerPage,
    onChangePaginationInputValue,
    onEnterGoToClick,
    onGoToClick,
    onForwardClick,
    onBackwardClick,
    onActionsClick,
    onActionsClose,
    onChangePage,
    onCheckedItemHandler,
    onCheckedAllItemsHandler,
    onClickDownloadCSVButtonHandler,
    onCheckedPaidHandler,
    onCheckedApproveHandler,
    onCheckedPublishMockFuncHandler,
    itemsPerPage,
    inputPaginationValue,
    currentPage,
    pages,
    checkedIds,
    showActions,
    isAllChecked,
    csvLink,
    csvData,
    company,
    excelRef,
    excelUrl,
    isActionMenuButtonDisabled,
    isContentLoading,
    debouncedValue,
    isFetchingReceipts,
    location,
    active_account,
    isSentSuccessPopup,
    setIsSentSuccessPopup,
    onCloseEmailModalHandler,
    onChangePagesAmount,
    onDownloadExcelFileHandler,
    onDeleteReceiptHandler,
    onMarkAsHandler,
    sortField,
    sortOrder,
    sortedReceipts,
    fetchParams,
    totalCount,
    isCompanyChanged,
    requestSort,
    setCurrentPage,
    count,
  } = useInboxState();

  return (
    <>
      <Styled.MainWrapper>
        <Styled.Wrapper>
          <Styled.TextWrapper>Purchases - Will Smith - Expense Report (16 Feb 2023)
            <div style={{ border: "1px solid #D9D9D9", marginTop: "13px" }} />
          </Styled.TextWrapper>
          <Styled.MainContent>
            <div style={{ display: "flex", flexDirection: "column", marginTop: "17px", fontSize: "17px", marginLeft: "5px" }}>
              <div style={{ lineHeight: "39px" }}>Created for : </div>
              <div style={{ lineHeight: "39px" }}>Report Date : </div>
              <div style={{ lineHeight: "39px" }}>Expense Total : </div>
              <div style={{ border: "1px solid #D9D9D9", marginTop: "13px" }} />
            </div>
          </Styled.MainContent>
          <TableExpenseDetails
            onCheckedItemHandler={onCheckedItemHandler}
            onCheckedAllItemsHandler={onCheckedAllItemsHandler}
            onCheckedPaidHandler={onCheckedPaidHandler}
            onCheckedApproveHandler={onCheckedApproveHandler}
            onCheckedPublishMockFuncHandler={onCheckedPublishMockFuncHandler}
            receiptList={sortedReceipts}
            isAllChecked={isAllChecked}
            dateFormat={""}
            sortField={sortField}
            sortOrder={sortOrder}
            requestSort={requestSort}
            isContentLoading
            isFetchingReceipts
          />
          {/* <PurchaseTable/> */}
           {receipts?.length ? (
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
          />
        ) : null}
        </Styled.Wrapper>
      </Styled.MainWrapper>
    </>
  );
};
