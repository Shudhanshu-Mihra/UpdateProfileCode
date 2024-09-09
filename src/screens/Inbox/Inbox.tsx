import { FC, memo, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { EmptyData } from 'components/EmptyData';
import { LoaderComponent } from 'components/Loader';
import { ROUTES } from 'constants/routes';
import { theme } from '../../styles/theme';

import { InboxStyles as Styled } from './Inbox.style';
import { useInboxState } from './Inbox.state';
import { ActionMenuContent } from './ActionMenuContent';

import { PaginationPanel } from "components/PaginationPanel";
import { TableInboxAdmin } from "components/Table/TableInboxAdmin";

import { ReUseSearch } from "ReUseComponents/reUseSearch/ReUseSearch";
import { ReUseDatePicker } from "ReUseComponents/reUseDatePicker/ReuseDatePicker";
import { ReUseStatusFilter } from "ReUseComponents/reUseStatusFilter/ReUseStatusFilter";
import { ReUseActionMenu } from "ReUseComponents/reUseActionMenu/ReUseActionMenu";
import { ReUseActionButton } from "ReUseComponents/reUseActionButton/ReUseActionButton";

import { EMPTY_DATA_STRINGS as Strings } from 'constants/strings';
// import { useClientSocketIO } from 'hooks/useSocketIO';
import { ReUseActionPlaceholder } from 'ReUseComponents/reUseActionPlaceHolder/ReUseActionPlaceHolder';
import { UploadStatus } from 'components/UploadStatus/UploadStatus';
import { UploadingView } from 'screens/UploadingView/UploadingView';

export const Inbox: FC = memo(() => {
  const {
    primaryAction,
    userRole,
    onSelectFilesHandler,
    onFetchReceiptsHandler,
    onChangeStatusValueHandler,
    onChangeDateFilterValueHandler,
    onChangeSearchValueHandler,
    onChangeDate,
    isDatePickerOpen,
    dateValue,
    searchValue,
    statusValue,
    dateFilterValue,
    formattedDate,
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
    // receiptsPerPage,
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
    isLoading,
    isContentLoading,
    debouncedValue,
    isFetchingReceipts,
    location,
    datePickerRef,
    active_account,
    isSentSuccessPopup,
    setIsSentSuccessPopup,
    onCloseEmailModalHandler,
    onClickOutsideDatePickerHandler,
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
    paginationCustomStyle,
    InBoxActionList,
    onBlurHandler,
    onFocusSearchHandler,

    isUploadingModalOpen,
    onUploadingModalToggle,
  } = useInboxState();

  // const {
  //   socketEvent,
  // } = useClientSocketIO();

  useEffect(() => {
    onFetchReceiptsHandler({
      ...fetchParams,
      skip: 0,
    });
    if (debouncedValue || isCompanyChanged) {
      setCurrentPage(0);
    }
  }, [debouncedValue, active_account]);

  useEffect(() => {
    if (count) {
      onChangePagesAmount(Number(itemsPerPage.value), count);
    }
  }, [itemsPerPage, count, active_account]);

  // useEffect(() => {
  //   console.log('socket effect');
  //   socketEvent();

  //   return () => {
  //     socketEvent(true);
  //   }
  // }, []);

  const isEmptyScreen = !isFetchingReceipts && !totalCount;

  // const purchaseEmptySet = () => {
  //   return {
  //     title: 'Uploaded receipts will be shown here...',
  //     firstSubtitle:
  //       'We have created everything for you, please upload your receipts to start.',
  //     secondSubtitle: 'You can do that by using Upload Receipt button below',
  //     PrimaryButton: <ReUseActionButton displayText="Upload Receipt" buttonType="actionButton" widthType="primary" themedButton='primary' toPath={ROUTES.receiptUploadFile} locationState={{action: "receipt"}} displayIconType="addPlus" />
  //   }; 
  // };

  return (
    <>
      <ActionMenuContent
        isSentSuccessPopup={isSentSuccessPopup}
        closeSuccesPopupHandler={setIsSentSuccessPopup}
        csvLink={csvLink}
        csvData={csvData}
        excelRef={excelRef}
        excelUrl={excelUrl}
        onCloseModalWindowHandler={onCloseEmailModalHandler}
        isModalWindowOpen={isEmailModalWindowOpen}
        onFormHandleSubmit={formik.handleSubmit}
        formikProps={formik.getFieldProps}
        formikMeta={formik.getFieldMeta}
        isValid={formik.isValid && formik.dirty}
        isLoading={isLoading}
        checkedIds={checkedIds}
      />
      <UploadingView  modalShow={isUploadingModalOpen} modalToggle={onUploadingModalToggle}/>
      {location.pathname !== '/purchase-invoices' ? (
        <Outlet />
      ) : isFetchingReceipts ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : totalCount ? (
        <>
          {!isFetchingReceipts ? (
            <Styled.Wrapper>
			{!isFetchingReceipts && (
        <ReUseActionPlaceholder>
					<ReUseSearch searchValue={searchValue} onChangeSearchValueHandler={onChangeSearchValueHandler} onBlurHandler={onBlurHandler} onFocusSearchHandler={onFocusSearchHandler} />
					<ReUseDatePicker
						datePickerRef={datePickerRef}
						dateFilterValue={dateFilterValue}
						isDatePickerOpen={isDatePickerOpen}
						dateValue={dateValue}
						formattedDate={formattedDate}
						isInputDate={isInputDate}
						onChangeDate={onChangeDate}
						setIsDatePickerOpen={setIsDatePickerOpen}
						onChangeDateFilterValueHandler={onChangeDateFilterValueHandler}
						onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
					/>
					<ReUseStatusFilter onChangeStatusValueHandler={onChangeStatusValueHandler} statusValue={statusValue} />
          <UploadStatus margin="0 0 0 auto" uploadingModalToggle={onUploadingModalToggle} />
					<ReUseActionMenu actionListArray={InBoxActionList} isActionMenuDisabled={isActionMenuButtonDisabled} />
					{/* isGuard && */ userRole !== "user" ? <ReUseActionButton displayText="Upload Receipts" /* buttonType="text-link" */ buttonType="actionButton" widthType="primary" themedButton="primary" /* onClick={() => {console.log('link button')}} */ toPath={ROUTES.receiptUploadFile} locationState={{ action: "receipt" }} displayIconType="addPlus" /* customColor={`${theme.colors.red}`} fontSize="22px" */ /> : null }
        </ReUseActionPlaceholder>
			)}
			<Styled.TableWrapper>
				{isFetchingReceipts && (
					<Styled.LoaderWrapper>
						<LoaderComponent theme="preview" />
					</Styled.LoaderWrapper>
				)}
				<TableInboxAdmin
					onCheckedItemHandler={onCheckedItemHandler}
					onCheckedAllItemsHandler={onCheckedAllItemsHandler}
					onCheckedPaidHandler={onCheckedPaidHandler}
					onCheckedApproveHandler={onCheckedApproveHandler}
					onCheckedPublishMockFuncHandler={onCheckedPublishMockFuncHandler}
					receiptList={sortedReceipts}
					isAllChecked={isAllChecked}
					dateFormat={company.date_format}
					sortField={sortField}
					sortOrder={sortOrder}
					requestSort={requestSort}
					isContentLoading={isContentLoading}
					isFetchingReceipts
				/>
				{sortedReceipts?.length ? (
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
		</Styled.Wrapper>
          ) : null}
        </>
      ) : isEmptyScreen ? (
        <EmptyData
          isUploadFile={true}
          // buttonText={Strings.buttonText}
          // title={purchaseEmptySet().title}
          title={Strings.title}
          // firstSubtitle={purchaseEmptySet().firstSubtitle}
          firstSubtitle={Strings.firstSubtitle}
          secondSubtitle={Strings.secondSubtitle}
        >
          <ReUseActionButton displayText="Upload Receipts" /* buttonType="text-link" */ buttonType="actionButton" widthType="primary" themedButton="primary" /* onClick={() => {console.log('link button')}} */ toPath={ROUTES.receiptUploadFile} locationState={{ action: "receipt" }} displayIconType="addPlus" /* customColor={`${theme.colors.red}`} fontSize="22px" */ />
        </EmptyData>
      ) : null}
    </>
  );
});

// <InboxContent
            //   InBoxActionList={InBoxActionList}
            //   isActionMenuButtonDisabled={isActionMenuButtonDisabled}
            //   userRole={userRole}
            //   primaryAction={primaryAction}
            //   datePickerRef={datePickerRef}
            //   pages={pages}
            //   currentPage={currentPage}
            //   onChangeItemsPerPage={onChangeItemsPerPage}
            //   onChangePaginationInputValue={onChangePaginationInputValue}
            //   inputPaginationValue={inputPaginationValue}
            //   itemsPerPage={itemsPerPage}
            //   onChangePage={onChangePage}
            //   onEnterGoToClick={onEnterGoToClick}
            //   onGoToClick={onGoToClick}
            //   onForwardClick={onForwardClick}
            //   onBackwardClick={onBackwardClick}
            //   statusValue={statusValue}
            //   dateFilterValue={dateFilterValue}
            //   onSelectFilesHandler={onSelectFilesHandler}
            //   onChangeStatusValueHandler={onChangeStatusValueHandler}
            //   onChangeDateFilterValueHandler={onChangeDateFilterValueHandler}
            //   onChangeSearchValueHandler={onChangeSearchValueHandler}
            //   searchValue={searchValue}
            //   onChangeDate={onChangeDate}
            //   onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
            //   isDatePickerOpen={isDatePickerOpen}
            //   dateValue={dateValue}
            //   setIsDatePickerOpen={setIsDatePickerOpen}
            //   formattedDate={formattedDate}
            //   isInputDate={isInputDate}
            //   showActions={showActions}
            //   onActionsClick={onActionsClick}
            //   onActionsClose={onActionsClose}
            //   onClickDownloadCSVButtonHandler={onClickDownloadCSVButtonHandler}
            //   onEmailClick={onEmailClick}
            //   isDownloadButtonDisabled={isActionMenuButtonDisabled}
            //   onDownloadExcelFileHandler={onDownloadExcelFileHandler}
            //   onDeleteItemHandler={onDeleteReceiptHandler}
            //   onMarkAsHandler={onMarkAsHandler}
            //   isContentLoading={isContentLoading}
            //   onCheckedItemHandler={onCheckedItemHandler}
            //   onCheckedAllItemsHandler={onCheckedAllItemsHandler}
            //   onCheckedPaidHandler={onCheckedPaidHandler}
            //   onCheckedApproveHandler={onCheckedApproveHandler}
            //   onCheckedPublishMockFuncHandler={onCheckedPublishMockFuncHandler}
            //   receiptList={sortedReceipts}
            //   requestSort={requestSort}
            //   isAllChecked={isAllChecked}
            //   dateFormat={company.date_format}
            //   isFetchingReceipts={isFetchingReceipts}
            //   sortField={sortField}
            //   sortOrder={sortOrder}
            //   paginationCustomStyle={paginationCustomStyle}
            //   onBlurHandler={onBlurHandler}
            //   onFocusSearchHandler={onFocusSearchHandler}
            // />