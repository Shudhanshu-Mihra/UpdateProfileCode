import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { EmptyData } from "components/EmptyData";
import { LoaderComponent } from "components/Loader";

import { SalesInvoicesStyles as Styled } from "./SalesInvoices.styles";
import { SalesInvoicesTable } from "components/Table/SalesInvoices";

import { useSalesInvoicesState } from "./SalesInvoices.state";
import { PaginationPanel } from "components/PaginationPanel";

import { ReUseActionButton } from "../../ReUseComponents/reUseActionButton/ReUseActionButton";
import { ReUseSearch } from "ReUseComponents/reUseSearch/ReUseSearch";
import { ReUseActionMenu } from "ReUseComponents/reUseActionMenu/ReUseActionMenu";
import { ROUTES } from "constants/routes";
import { ReUseDatePicker } from "ReUseComponents/reUseDatePicker/ReuseDatePicker";
import { ReUseStatusFilter } from "ReUseComponents/reUseStatusFilter/ReUseStatusFilter";

export const SalesInvoices: FC = () => {
	const navigate = useNavigate();
	const {
		userRole,
		onBackwardClick,
		onForwardClick,
		onGoToClick,
		onEnterGoToClick,
		onChangePaginationInputValue,
		onChangePagesAmount,
		onChangePageHandler,
		setItemsPerPage,
		setCurrentPage,
		itemsPerPage, //: receiptsPerPage,
		currentPage,
		pages,
		inputPaginationValue,
		onChangePage,

		sortOrder,
		sortField,
		requestSort,
		onCheckedPublishMockFuncHandler,
		onCheckedPaidHandler,
		onCheckedApproveHandler,
		checkedInvoiceIds,
		isAllChecked,
		onDeleteInvoiceHandler,
		datePickerRef,
		excelRef,
		excelUrl,
		csvData,
		isSentSuccessPopup,
		csvLink,
		dataToSend,
		dateEnd,
		dateStart,
		datePickerValue,
		datePickerRangeValue,
		debouncedValue,
		fetchParams,
		formattedDate,
		isInputDate,
		isCompanyChanged,
		isContentLoading,
		isDatePickerOpen,
		isActionMenuDisabled,
		isEmailModalWindowOpen,
		isLoading,
		location,
		onActionsClick,
		onActionsClose,
		onChangeDate,
		onChangeItemsPerPage,
		onChangeSearchValueHandler,
		onChangeStatusValueHandler,
		onChangeDateFilterValueHandler,
		onCheckedItemHandler,
		onClickDownloadCSVButtonHandler,
		onClickOutsideDatePickerHandler,
		onCloseModalWindowHandler,
		onDownloadExcelFileHandler,
		onEmailClick,
		InvoiceActionList,
		onEmailModalWindowToggle,
		onMarkAsPaidButtonHandler,
		onPostEmailHandler,
		onSelectSalesFilesHandler,
		searchValue,
		setIsDatePickerOpen,
		setIsSentSuccessPopup,
		showActions,
		sortedInvoices,
		statusValue,
		dateFilterValue,
		totalCount,
		invoice_formik,
		onMarkAsHandler,
		onFocusSearchHandler,
		onBlurHandler,

		onFetchSalesInvoicesHandler,
		active_account,
		count,
		isFetchingInvoice,
		onCheckedAllItemsHandler,
		company,
	} = useSalesInvoicesState();

	const isGuard = true;

	useEffect(() => {
		onFetchSalesInvoicesHandler({
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

	const isEmptyScreen = !isFetchingInvoice && !totalCount;
	console.log(isFetchingInvoice, totalCount, isEmptyScreen);

	const salesEmptySet = () => {
		return {
			title: "Uploaded invoices will be shown here...",
			firstSubtitle: "We have created everything for you, please upload your invoice to start.",
			secondSubtitle: "You can do that by using Upload Receipt button below",
			PrimaryButton: <ReUseActionButton displayText="Upload Invoices" buttonType="actionButton" widthType="primary" themedButton="primary" toPath={ROUTES.invoiceUploadFile} locationState={{ action: "upload-invoice" }} displayIconType="addPlus" />,
		};
	};

	return (
		<Styled.Wrapper>
			{location.pathname !== "/sales-invoices" ? (
				<Outlet />
			) : isFetchingInvoice ? (
				<Styled.LoaderWrapper>
					<LoaderComponent theme="preview" />
				</Styled.LoaderWrapper>
			) : totalCount ? (
				<>
					{!isFetchingInvoice ? (
						<>
							<Styled.ActionPanelPlaceHolder>
								<ReUseSearch searchValue={searchValue} onChangeSearchValueHandler={onChangeSearchValueHandler} onBlurHandler={onBlurHandler} onFocusSearchHandler={onFocusSearchHandler} />
								{<ReUseDatePicker
									datePickerRef={datePickerRef}
									dateFilterValue={dateFilterValue}
									isDatePickerOpen={isDatePickerOpen}
									dateValue={datePickerValue}
									formattedDate={formattedDate}
									isInputDate={isInputDate}
									onChangeDate={onChangeDate}
									setIsDatePickerOpen={setIsDatePickerOpen}
									onChangeDateFilterValueHandler={onChangeDateFilterValueHandler}
									onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
								/>}
								<ReUseStatusFilter onChangeStatusValueHandler={onChangeStatusValueHandler} statusValue={statusValue} />
								{/* <ReUseActionButton displayText="Add Expense Report" buttonType="actionButton" widthType="primary" themedButton='primary' toPath={ROUTES.receiptUploadFile} locationState={{ action: "receipt" }} customWidth="50%" displayIconType="addPlus" /> */}
								<ReUseActionMenu margin="0 0 0 auto" actionListArray={InvoiceActionList} isActionMenuDisabled={isActionMenuDisabled} />
								{isGuard && userRole !== "user" ? salesEmptySet().PrimaryButton : null}
							</Styled.ActionPanelPlaceHolder>
							<SalesInvoicesTable
								onCheckedPublishMockFuncHandler={onCheckedPublishMockFuncHandler}
								invoicesList={sortedInvoices}
								sortedInvoices={sortedInvoices}
								onCheckedItemHandler={onCheckedItemHandler}
								isAllChecked={isAllChecked}
								onCheckedPaidHandler={onCheckedPaidHandler}
								onCheckedApproveHandler={onCheckedApproveHandler}
								dateFormat={company.date_format}
								sortField={sortField}
								sortOrder={sortOrder}
								requestSort={requestSort}
								onCheckedAllItemsHandler={onCheckedAllItemsHandler}
								isContentLoading={isContentLoading}
							/>
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
								paginationCustomStyle={{
									position: "fixed",
								}}
							/>
						</>
					) : null}
				</>
			) : isEmptyScreen ? (
				<EmptyData
					isUploadFile={true}
					title={salesEmptySet().title}
					firstSubtitle={salesEmptySet().firstSubtitle}
				>
					{salesEmptySet().PrimaryButton}
				</EmptyData>
			) : null}
		</Styled.Wrapper>
	);
};


{/* <ActionsPanel
								datePickerRef={datePickerRef}
								onMarkAsPaidButtonHandler={onMarkAsPaidButtonHandler}
								onMarkAsHandler={onMarkAsHandler}
								onClickDownloadCSVButtonHandler={onClickDownloadCSVButtonHandler}
								onSelectSalesFilesHandler={onSelectSalesFilesHandler}
								onChangeStatusValueHandler={onChangeStatusValueHandler}
								onChangeDateFilterValueHandler={onChangeDateFilterValueHandler}
								statusValue={statusValue}
								dateFilterValue={dateFilterValue}
								onChangeSearchValueHandler={onChangeSearchValueHandler}
								searchValue={searchValue}
								onChangeDate={onChangeDate}
								onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
								isDatePickerOpen={isDatePickerOpen}
								dateValue={datePickerValue}
								setIsDatePickerOpen={setIsDatePickerOpen}
								formattedDate={formattedDate}
								isInputDate={isInputDate}
								onActionsClose={onActionsClose}
								onEmailClick={onEmailClick}
								showActions={showActions}
								isDownloadButtonDisabled={isActionMenuDisabled}
								onDownloadExcelFileHandler={onDownloadExcelFileHandler}
								csvLink={csvLink}
								csvData={csvData}
								excelRef={excelRef}
								excelUrl={excelUrl}
								isSentSuccessPopup={isSentSuccessPopup}
								closeSuccesPopupHandler={setIsSentSuccessPopup}
								onCloseModalWindowHandler={onCloseModalWindowHandler}
								isModalWindowOpen={false}
								formikProps={invoice_formik.getFieldProps}
								formikMeta={invoice_formik.getFieldMeta}
								isValid={false}
								isLoading={isLoading}
								checkedIds={checkedInvoiceIds}
								onDeleteItemHandler={onDeleteInvoiceHandler}
								onFormHandleSubmit={invoice_formik.handleSubmit}
								primaryAction="uplaod-invoice"
							/> */}
