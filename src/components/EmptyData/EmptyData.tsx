import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

import emptyDataSrc from "assets/icons/empty-receipts.png";

import { FileUploadButton } from "../FileUploadButton";
import { useExpenseReportState } from "screens/ExpenseReport/ExpenseReportstate";

import { EmptyDataStyles as Styled } from "./EmptyData.style";
import { Button } from "../Button";
import { string } from "yup";

interface IEmptyDataProps {
	imageUrl?: string;
	title?: string;
	firstSubtitle?: string;
	secondSubtitle?: string;
	thirdSubtitle?: string;
	fourthSubtitle?: string;
	buttonText?: string;
	onAddReceiptHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	isNoResults?: boolean;
	isUploadFile?: boolean;
	isRoundedButton?: boolean;
	userRole?: string;
	emptyFrom?: string;

	children?: any;
}
export const EmptyData: FC<IEmptyDataProps> = (props) => {
	const { imageUrl,thirdSubtitle, firstSubtitle,fourthSubtitle, secondSubtitle, title, isNoResults, isUploadFile, buttonText, isRoundedButton, userRole, onAddReceiptHandler, onClick, emptyFrom, children } = props;

	// const { onSelectFilesHandler } = useInboxState();
	const {onReportModalToggle} = useExpenseReportState();
	const isUserRole = userRole === "user";
	return (
		<Styled.MainWrapper>
			{isNoResults ? (
				<Styled.ImageWrapper>
					<Styled.Image src={imageUrl || emptyDataSrc}></Styled.Image>
					<Styled.Title>No results</Styled.Title>
				</Styled.ImageWrapper>
			) : (
				<Styled.ContentWrapper>
					<Styled.Image src={imageUrl || emptyDataSrc}></Styled.Image>
					<Styled.Title>{title}</Styled.Title>
					<Styled.SubTitle>{isUserRole ? "" : firstSubtitle}</Styled.SubTitle>
					<Styled.SubTitle>{isUserRole ? "" : secondSubtitle}</Styled.SubTitle>
					<Styled.SubTitle>{isUserRole ? "" : thirdSubtitle}</Styled.SubTitle>
					<Styled.SubTitle>{isUserRole ? "" : fourthSubtitle}</Styled.SubTitle>
					{children}
					{/* {!emptyFrom ? isUploadFile ? (
								<Styled.ButtonWrapper>
									<Button width="primary" themedButton="roundedRed" onClick={onClick}>
										{buttonText}
									</Button>
								</Styled.ButtonWrapper>
					) : (
						!isUserRole && (
								<Styled.ButtonWrapper>
									<Button width="primary" themedButton="roundedRed" onClick={onClick}>
										{buttonText}
									</Button>
								</Styled.ButtonWrapper>
						)
					): emptyFrom == 'purchase' ?(
						<ReUseActionButton displayText="Upload Receipt" buttonType="actionButton" widthType="primary" themedButton='primary' toPath={ROUTES.receiptUploadFile} locationState={{action: "receipt"}} displayIconType="addPlus" />
					): emptyFrom == 'sale' ?
					<ReUseActionButton displayText="Upload Invoices" buttonType="actionButton" widthType="primary" themedButton='primary' toPath={ROUTES.invoiceUploadFile} locationState={{action: "upload-invoice"}} displayIconType="addPlus" /> :
						emptyFrom == 'expenseReport' ?
					<ReUseActionButton displayText="Upload Invoices" buttonType="actionButton" widthType="primary" themedButton='primary' onClick={onReportModalToggle} />
					: null
				} */}
				</Styled.ContentWrapper>
			)}
		</Styled.MainWrapper>
	);
};


	// <FileUploadButton onChangeFiles={onAddReceiptHandler} isRoundedButton={isRoundedButton} customButtonName="ADD" />
            // <Link to={{ pathname: ROUTES.receiptUploadFile }} state={{ action: "receipt" }}>
								{/* <Styled.Link> */}
								{/* </Styled.Link> */}
									{/* </Link> */}

	// <Styled.reUseBuutonHolder>
	// </Styled.reUseBuutonHolder>
