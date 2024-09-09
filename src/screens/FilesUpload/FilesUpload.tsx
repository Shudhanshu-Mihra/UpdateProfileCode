import React, { FC, useState } from "react";
import { UploadInput } from "../../components/UploadInput";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

import { useInboxState } from "../Inbox/Inbox.state";
import { useSalesInvoicesState } from "../SalesInvoices/SalesInvoices.state";

import { FilesUploadStyles as Styled } from "./FilesUpload.style";
import { NavigationButton } from "components/NavigationButton";
import { replace } from "formik";

export const FilesUpload: FC = () => {
	type LocationState = {
		action?: string;
	};

	const navigate = useNavigate();
	const onGoBackHandler = () => navigate(-1);

	const location = useLocation();
	// const action = location.state?.action;

	const yesLocation = () => {
		if (location?.state) {
			const { action } = location.state as LocationState;
			console.log(location);
			return action;
		} else {
			navigate(ROUTES.home, { replace: true });
		}
	};
	const urlDirect = yesLocation();

	const { onSelectFilesHandler } = useInboxState();
	const { onSelectSalesFilesHandler } = useSalesInvoicesState();
	return (
		<>
			<Styled.ScreenWrapper>
				{urlDirect ? (
					<Styled.UploadSpace>
						<Styled.BoxWrapper onClick={onGoBackHandler}>
							<NavigationButton themedButton="navigation" iconBehavior="iconPrevious">
								<Styled.ButtonText>Back to list</Styled.ButtonText>
							</NavigationButton>
						</Styled.BoxWrapper>
						<Styled.Title>Upload {urlDirect === "receipt" ? "Receipts" : "Invoices"}</Styled.Title>
						<Styled.warnings>Maximum 50 files upload at a time | Total files size limit upto 60MB </Styled.warnings>
						<Styled.ButtonWrapper>
							<UploadInput onChangeFiles={urlDirect === "receipt" ? onSelectFilesHandler : onSelectSalesFilesHandler} />
							<Styled.Label htmlFor="uploadFile">CHOOSE FILES</Styled.Label>
						</Styled.ButtonWrapper>
					</Styled.UploadSpace>
				) : (
					<h1>Incomplete Action</h1>
				)}
			</Styled.ScreenWrapper>
		</>
	);
};
