import React from "react";

import { ActionMenuListStyle as Styled } from "./actionMenuList.style";
import { useExpenseReportState } from "screens/ExpenseReport/ExpenseReportstate";
// import { MasterExpenseModalWindowBox } from "components/MasterExpenseModalWindowBox";

export interface IActionMenuListProps {
	actionListArray: {
		actionListlabel: string;
		actionListHandler?: () => Promise<void>;
	}[];
	// onMarkAsPaidButtonHandler?: () => Promise<void>;
	// onMarkAsHandler: (mark: string) => Promise<void>;
	// onClickDownloadCSVButtonHandler: () => void;
	// onDownloadExcelFileHandler: () => void;
	// onEmailClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	// onDeleteItemHandler: () => Promise<void>;
	// dot3ExpReport?: boolean;

	// isLoading: boolean;
	// isModalWindowOpen: boolean;
	// onModalWindowToggle: () => void;
}

export const ActionMenuList = (props: IActionMenuListProps) => {
	const {
        // isLoading,
        // isModalWindowOpen,
        // onModalWindowToggle,
        actionListArray 
    } = props;

	return (
		<>
			<Styled.Wrapper>
				{actionListArray &&
					actionListArray.map((action) => {
					const handleClick = action.actionListHandler || (() => {});
					return <Styled.Item disabled={action.actionListHandler? false: true} onClick={() => handleClick()}>{action.actionListlabel}</Styled.Item>
					})
				}
			</Styled.Wrapper>
		</>
	);
};

{
	/* <Styled.Wrapper>
				{props?.dot3ExpReport ? <Styled.Item onClick={onModalWindowToggle}>Add to Expense Report</Styled.Item> : null}
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
			</Styled.Wrapper> */
}
