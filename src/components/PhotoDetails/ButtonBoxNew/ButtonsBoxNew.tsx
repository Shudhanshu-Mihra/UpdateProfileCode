import React, { FC, useState, useEffect } from "react";
import { Button } from "../../Button";
import { ButtonsBoxStyles as Styled } from "./ButtonsBoxNew.style";

interface IButtonBoxProps {
	onRejectButtonClickHandler?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	isLoading?: boolean;
}

export const ButtonsBoxNew: FC<IButtonBoxProps> = ({ onRejectButtonClickHandler, isLoading }) => {
	console.log('!!!!!!!!!!!!!!!!! - RDContent child-buttonNew');
	const [selectedButton, setSelectedButton] = useState<string | null>(null);

	const handleButtonClick = (buttonType: string, handler?: () => void | Promise<void>, event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setSelectedButton(buttonType);
		if (handler) {
			handler();
		}
	};

	const handleRejectButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (onRejectButtonClickHandler) {
			const customEvent = {
				...event,
				currentTarget: { ...event.currentTarget, value: "rejected" },
			};
			onRejectButtonClickHandler(customEvent as React.MouseEvent<HTMLButtonElement, MouseEvent>);
		}
		setSelectedButton("rejected");
	};

	// useEffect(() => {
	//   if (selectedButton) {
	//     const timer = setTimeout(() => {
	//       setSelectedButton(null);
	//     }, 300); // delay in ms, adjust as needed
	//     return () => clearTimeout(timer); // cleanup timeout if component unmounts
	//   }
	// }, [selectedButton]);

	return (
		<Styled.ButtonsWrapper>
			<Button
				// onClick={handleRejectButtonClick}
				themedButton={"roundedWhite"}
				width="rounded"
				isLoading={selectedButton === 'accepted' && isLoading}
				isDisabled={selectedButton === 'accepted' && isLoading}
			>
				{"Archive"}
			</Button>
			<Button onClick={handleRejectButtonClick} themedButton={selectedButton === "save" ? "roundedRed" : "roundedWhite"} width="rounded" isLoading={selectedButton === 'accepted' && isLoading} isDisabled={selectedButton === 'accepted' && isLoading}>
				{"Reject"}
			</Button>
		</Styled.ButtonsWrapper>
	);
};
