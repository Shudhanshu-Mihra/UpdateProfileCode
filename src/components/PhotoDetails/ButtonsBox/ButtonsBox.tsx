import React, { FC, useState, useEffect } from "react";
import { Button } from "../../Button";
import { ButtonsBoxStyles as Styled } from "./ButtonsBox.style";

interface IButtonBoxProps {
	secondButtonText?: string;
	saveReceiptHandler?: () => Promise<void>;
	onCancelButtonClickHandler?: () => void;
	onApproveButtonClickHandler?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	onRejectButtonClickHandler?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	isLoading?: boolean;
	buttonValue?: string;
}

export const ButtonsBox: FC<IButtonBoxProps> = ({ saveReceiptHandler, onCancelButtonClickHandler, onApproveButtonClickHandler, isLoading, buttonValue }) => {
	// console.log('!!!!!!!!!!!!!!!!! - RDContent child-buttonold');
	const [selectedButton, setSelectedButton] = useState<string | null>(null);

	const handleButtonClick = (buttonType: string, handler?: () => void | Promise<void>, event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setSelectedButton(buttonType);
		if (handler) {
			handler();
		}
	};

	const handleApproveButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (onApproveButtonClickHandler) {
			const customEvent = {
				...event,
				currentTarget: { ...event.currentTarget, value: "accepted" },
			};
			onApproveButtonClickHandler(customEvent as React.MouseEvent<HTMLButtonElement, MouseEvent>);
		}
		setSelectedButton("accepted");
	};

	useEffect(() => {
		if (selectedButton) {
			const timer = setTimeout(() => {
				setSelectedButton(null);
			}, 2000); // delay in ms, adjust as needed
			return () => clearTimeout(timer); // cleanup timeout if component unmounts
		}
	}, [selectedButton]);

	return (
		<Styled.ButtonsWrapper>
			<Button onClick={handleApproveButtonClick} themedButton={selectedButton === "accepted" ? "roundedRed" : "roundedWhite"} width="rounded" isLoading={selectedButton === 'accepted' && isLoading} isDisabled={selectedButton === 'accepted' && isLoading}>
				{"Approve & Save"}
			</Button>
			<Button onClick={saveReceiptHandler} themedButton={selectedButton === "save" ? "roundedRed" : "roundedWhite"} width="rounded" isLoading={selectedButton === 'save' && isLoading} isDisabled={selectedButton === 'save' && isLoading}>
				{"Save"}
			</Button>
			<Button onClick={(event) => handleButtonClick("cancel", onCancelButtonClickHandler, event)} themedButton={selectedButton === "cancel" ? "roundedRed" : "roundedWhite"} width="rounded" isDisabled={isLoading}>
				{"Cancel"}
			</Button>
		</Styled.ButtonsWrapper>
	);
};
