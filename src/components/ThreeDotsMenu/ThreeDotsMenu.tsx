import React from "react";

import { ThreeDotsMenuStyles as Styled } from "./ThreeDotsMenu.style";
import { useExpenseReportState } from "screens/ExpenseReport/ExpenseReportstate";
// import { MasterExpenseModalWindowBox } from "components/MasterExpenseModalWindowBox";

export interface IThreeDotsMenu {
	onMarkAsPaidButtonHandler?: () => Promise<void>;
	onMarkAsHandler: (mark: string) => Promise<void>;
	onClickDownloadCSVButtonHandler: () => void;
	onDownloadExcelFileHandler: () => void;
	onEmailClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	onDeleteItemHandler: () => Promise<void>;
	dot3ExpReport?: boolean;
}

export const ThreeDotsMenu = (props: IThreeDotsMenu) => {
	const {
		isLoading,
		isCreateReportModalOpen,
		// modalInputValue,
		// modalInputDate,
		// modalInputName,
		// onChangeExpenseUserValueHandler,
		// onCreateExpenseHandler,
		onEnterCreateCategoryClick,
		onReportModalToggle,
		// isDeleteModalWindowOpen,
		// onDeleteModalWindowToggle,
		// onDeleteButtonClickHandler,
		// selectedCategory,
		// isEdit,
		// isDisableButton,
		// onSaveButtonClickHandler,
		// onModalWindowCancelClickButtonHandler,
		// onChangeExpenseDateValueHandler,
		// onChangeExpenseNameValueHandler,
	} = useExpenseReportState();
	const { onMarkAsPaidButtonHandler, onMarkAsHandler, onClickDownloadCSVButtonHandler, onDownloadExcelFileHandler, onEmailClick, onDeleteItemHandler } = props;
	return (
		<>
			{/* <MasterExpenseModalWindowBox
				isLoading={isLoading}
				onCloseModalWindowHandler={onModalWindowCancelClickButtonHandler}
				onChangePaginationInputValueHandler={onChangeExpenseUserValueHandler}
				onChangeExpenseDateValueHandler={onChangeExpenseDateValueHandler}
				onChangeExpenseNameValueHandler={onChangeExpenseNameValueHandler}
				onEnterCreateItemClick={onEnterCreateCategoryClick}
				onSaveButtonCLickHandler={
					isEdit ? onSaveButtonClickHandler : onCreateExpenseHandler
				}
				isModalWindowOpen={isModalWindowOpen}
				headerText={'Add to Expense Report'}
				inputValue={modalInputValue}
				dateValue={modalInputDate}
				reportName={modalInputName}
				onDeleteButtonClickHandler={onDeleteButtonClickHandler}
				deleteItemName={`‘${selectedCategory?.name}’`}
				categoryName="category"
				isDeleteModalWindowOpen={isDeleteModalWindowOpen}
				onCloseDeleteModalWindowHandler={onDeleteModalWindowToggle}
				isDisableButton={isDisableButton}
			/> */}
			<Styled.Wrapper>
				{props?.dot3ExpReport ? <Styled.Item onClick={onReportModalToggle}>Add to Expense Report</Styled.Item> : null}
				<Styled.Item onClick={() => onMarkAsHandler('paid')}>Mark as paid</Styled.Item>
				<Styled.Item onClick={() => onMarkAsHandler('unpaid')}>Mark as Unpaid</Styled.Item>
				<Styled.Item onClick={() => onMarkAsHandler('approved')}>Mark as Approved</Styled.Item>
				<Styled.Item onClick={() => onMarkAsHandler('rejected')}>Mark as Rejected</Styled.Item>
				<Styled.Item onClick={() => onMarkAsHandler('published')}>Mark as Published</Styled.Item>
				<Styled.Item onClick={() => onMarkAsHandler('unpublished')}>Mark as Unpublished</Styled.Item>
				<Styled.Item onClick={() => onMarkAsHandler('withdrawlapproval')}>Withdrawl Approval</Styled.Item>
				<Styled.Item onClick={() => onMarkAsHandler('withdrawlrejection')}>Withdrawl Rejection</Styled.Item>
				<Styled.Item onClick={onEmailClick}>Send</Styled.Item>
				<Styled.Item onClick={onDeleteItemHandler}>Delete</Styled.Item>
				<Styled.Item onClick={onDownloadExcelFileHandler}>Export to Excel</Styled.Item>
				<Styled.Item onClick={onClickDownloadCSVButtonHandler}>Export to CSV</Styled.Item>
				<Styled.Item onClick={onClickDownloadCSVButtonHandler}>Export to PDF</Styled.Item>
			</Styled.Wrapper>
		</>
	);
};
