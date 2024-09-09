import { FC, useEffect } from "react";

import { EmptyData } from "components/EmptyData";

import { useExpenseReportState } from "./ExpenseReportstate";
import { ExpenseReportStyles as Styled } from "./ExpenseReport.style";

import { EMPTY_DATA_STRINGS_MASTER as Strings } from "constants/strings";
import { ExpenseContent } from "./ExpenseContent";
import { ReportModal } from "./reportModal";

import { LoaderComponent } from "../../components/Loader";
import { PaginationPanel } from "../../components/PaginationPanel";

import { TableReportExpense } from "components/Table/TableReportExp/TableReportExpense";

import { ReUseActionButton } from "../../ReUseComponents/reUseActionButton/ReUseActionButton";
import { ReUseSearch } from "ReUseComponents/reUseSearch/ReUseSearch";
import { ReUseActionMenu } from "ReUseComponents/reUseActionMenu/ReUseActionMenu";
import { Input } from "components/Input";
import { Icon } from "components/Icons";
import { ReUseDataTable } from "ReUseComponents/reUseDataTable/ReUseDataTable";

export const ExpenseReport: FC = () => {
	const {
		isLoading,
		isCreateReportModalOpen,
		onReportModalToggle,
		onChangeSearchValueHandler,

		//form value and handler
		isNewReport,
		modalInputReportFor,
		modalInputReportDate,
		modalInputReportSelectedDate,
		modalInputReportName,
		onChangeReportFormType,
		onChangeReportForHandler,
		onChangeReportDateHandler,
		onChangeReportNameHandler,
		modalReportCreateButtonHandler,
		modalReportCancelButtonHandler,
		onEnterCreateCategoryClick,

		// onGetAllCategoriesHandler,
		searchValue,
		reportsList,
		sortedReports,
		sortField,
		sortOrder,
		count,
		company,
		isCompanyChanged,

		isAllChecked,
		onCheckedReportHandler,
		onCheckedAllReportHandler,
		selectReport,
		selectReportWithId,
		setIsFetchingDate,
		updateReport,
		setReportCheckedItem,
		setCheckedAllItems,
		setIsCompanyChanged,
		// onDeleteItemClickHandler,
		// onDeleteButtonClickHandler,
		// selectedCategory,
		isEdit,
		// onEditItemClickHandler,
		// isDisableButton,
		// onSaveButtonClickHandler,
		setCurrentPage,
		onChangePaginationInputValue,
		onChangePage,
		onEnterGoToClick,
		onGoToClick,
		onForwardClick,
		onBackwardClick,
		// onChangePagesAmount,
		onBlurHandler,
		onFocusSearchHandler,
		currentPage,
		inputPaginationValue,
		itemsPerPage,
		pages,
		isFetchingReports,
		isEmptyData,
		debouncedValue,
		isFocus,
		isContentLoading,
		isSearching,
		searchedItems,

		active_account,
		userRole,

		onFetchAllReportHandler,
		reportFetchParams,
		expReportActionList,
		onChangeReportsPerPage,
		isActionMenuDisabled,
	} = useExpenseReportState();

	useEffect(() => {
		!searchValue &&
			onFetchAllReportHandler({
				take: +itemsPerPage.value,
				skip: currentPage * +itemsPerPage.value,
			});
	}, [searchValue, active_account]);
	const isGuard = true;

	useEffect(() => {
		debouncedValue &&
			onFetchAllReportHandler(
				{
					search: debouncedValue,
				}
				// isSearching
			);
	}, [debouncedValue]);

	// useEffect(() => {
	//   if (!count) return;
	//   onChangePagesAmount(+itemsPerPage.value, count);
	// }, [count, itemsPerPage]);

	useEffect(() => {
		onFetchAllReportHandler({
			...reportFetchParams,
			skip: 0,
		});
		if (debouncedValue || isCompanyChanged) {
			setCurrentPage(0);
		}
	}, [debouncedValue, active_account]);

	const expReportEmptySet = () => {
		return {
			title: "Expense Report will be shown here...",
			firstSubtitle: "you can create an expense report by adding receipt into it.",
			secondSubtitle: "",
			PrimaryButton: <ReUseActionButton displayText="Add Expense Report" buttonType="actionButton" widthType="primary" themedButton="primary" onClick={onReportModalToggle} displayIconType="addPlus" />
		};
	};

	return (
		<>
			{isFetchingReports ? (
				<Styled.LoaderWrapper>
					<LoaderComponent theme="preview" />
				</Styled.LoaderWrapper>
			) : !isFetchingReports && isEmptyData && !reportsList?.length ? (
				// <EmptyData firstSubtitle={expReportEmptySet().firstSubtitle} title={expReportEmptySet().title} userRole={userRole}> {expReportEmptySet().PrimaryButton} </EmptyData>
				<ReUseDataTable />
			) : (
				<Styled.ReportListContentWrapper>
					{/* <ReUseDataTable /> */}
					<Styled.ActionPanelPlaceHolder>
						<ReUseSearch searchValue={searchValue} onChangeSearchValueHandler={onChangeSearchValueHandler} onBlurHandler={onBlurHandler} onFocusSearchHandler={onFocusSearchHandler} />
						{/* <ReUseActionButton displayText="Add Expense Report" buttonType="actionButton" widthType="primary" themedButton='primary' toPath={ROUTES.receiptUploadFile} locationState={{ action: "receipt" }} customWidth="50%" displayIconType="addPlus" /> */}
						<ReUseActionMenu margin="0 0 0 auto" actionListArray={expReportActionList} isActionMenuDisabled={isActionMenuDisabled} />
						{isGuard && userRole !== "user" ? expReportEmptySet().PrimaryButton : null}
					</Styled.ActionPanelPlaceHolder>
					<Styled.TableWrapper>
						{isContentLoading && (
							<Styled.LoaderWrapper>
								<LoaderComponent theme="preview" />
							</Styled.LoaderWrapper>
						)}
						<TableReportExpense
							isAllChecked={isAllChecked}
							onCheckedItemHandler={onCheckedReportHandler}
							onCheckedAllItemsHandler={onCheckedAllReportHandler}
							sortedReportList={sortedReports}
							dateFormat={company.date_format}
							sortField={sortField}
							sortOrder={sortOrder}
							// requestSort={requestSort}
						/>
						{sortedReports.length ? (
							<PaginationPanel
								pages={pages}
								currentPage={currentPage}
								onChangeItemsPerPage={onChangeReportsPerPage}
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
					</Styled.TableWrapper>
				</Styled.ReportListContentWrapper>
			)}
			<ReportModal
				isLoading={isLoading}
				headerText={"Add Expense Report"}
				// isDisableButton={isDisableButton}

				radioReportFormType={isNewReport}
				onChangeReportFormHandler={onChangeReportFormType}
				inputValueReportFor={modalInputReportFor}
				onChangeReportForHandler={onChangeReportForHandler}
				inputValueReportDate={modalInputReportDate}
				inputValueReportSelectedDate={modalInputReportSelectedDate}
				onChangeReportDateHandler={onChangeReportDateHandler}
				inputValueReportName={modalInputReportName}
				onChangeReportNameHandler={onChangeReportNameHandler}
				modalReportCreateButtonHandler={modalReportCreateButtonHandler}
				modalReportCancelButtonHandler={modalReportCancelButtonHandler}
				// onEnterCreateItemClick={onEnterCreateCategoryClick}
				// onSaveButtonCLickHandler={
				//   isEdit ? onSaveButtonClickHandler : onCreateExpenseHandler
				// }
				isModalWindowOpen={isCreateReportModalOpen}
				onModalWindowToggle={onReportModalToggle}
			/>
			{/* <DeleteModalWindow onCloseDeleteModalWindowHandler={onCloseDeleteModalWindowHandler} onDeleteButtonClickHandler={onDeleteButtonClickHandler} isDeleteModalWindowOpen={isDeleteModalWindowOpen} deleteItemName={deleteItemName} isLoading={isLoading} categoryName={categoryName} /> */}
		</>
	);
};


// <ExpenseContent
				// 	isGuard
				// 	userRole={userRole}
				// 	isAllChecked={isAllChecked}
				// 	onCheckedItemHandler={onCheckedReportHandler}
				// 	onCheckedAllItemsHandler={onCheckedAllReportHandler}
				// 	isContentLoading={isContentLoading}
				// 	isFetchingData={isFetchingReports}
				// 	isFocus={isFocus}
				// 	reportsList={reportsList}
				// 	sortedReportList={sortedReports}
				// 	currentPage={currentPage}
				// 	dateFormat={company.date_format}
				// 	// inputPaginationValue={inputPaginationValue}
				// 	onAddClickButtonHandler={onModalWindowToggle}
				// 	onBackwardClick={onBackwardClick}
				// 	onChangePaginationInputValue={onChangePaginationInputValue}
				// 	// onChangeReceiptsPerPage={onChangeItemsPerPage}
				// 	onChangeSearchValueHandler={onChangeSearchValueHandler}
				// 	// onDeleteIconClickHandler={onDeleteItemClickHandler}
				// 	// onEditIconClickHandler={onEditItemClickHandler}
				// 	onForwardClick={onForwardClick}
				// 	onEnterGoToClick={onEnterGoToClick}
				// 	onGoToClick={onGoToClick}
				// 	pages={pages}
				// 	receiptsPerPage={itemsPerPage}
				// 	searchValue={searchValue}
				// 	tabName="Category"
				// 	onBlurHandler={onBlurHandler}
				// 	onFocusSearchHandler={onFocusSearchHandler}
				// 	onChangePage={onChangePage}
				// 	searchedItems={searchedItems}
				// />