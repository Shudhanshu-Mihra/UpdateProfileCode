import React, { useState, useEffect } from "react";
import { LoaderComponent } from "../../components/Loader";
import { Icon } from "components/Icons/Icons";
import { COLORS, theme } from 'styles/theme';

import { reUseActionButtonStyle as Styled } from "./ReUseActionButton.style";
import { string } from "yup";

export interface ILink {
	to: string;
	locationState?: { action: string };
	paddingInline?: string;
	paddingBlock?: string;
	customWidth?: string;
}

export interface IReUseActionButtonProps {
	displayText?: string;
	toPath?: string | false;
	locationState?: { action: string };
	paddingInline?: string;
	// paddingBlock?: string;
	margin?: string; // "0 0 0 0"
	customWidth?: string;
	fontSize?: string;
	displayIconType?: string;
	buttonType?: "actionButton" | "text-link" | "Submit";
	customColor?: string;	//pass this props with buttonType=text-link
	// yesClick?: () => void;
	onClick?: () => void;
	// onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	// onFormikClick?: (formikValues: { fullName: string; email: string; }) => Promise<void>;
	onFormikClick?: (formikValues: any) => Promise<void>;
	// updateHandler?:(e?: React.FormEvent<HTMLFormElement>) => void;
	iconType?: "google";
	children?: React.ReactNode;
	isDisabled?: boolean;
	isAccout?: boolean;
	type?:  "submit"|"reset" | "button";
	isLoading?: boolean;
	themedButton?: "primary" | "secondary" | "capium" | "roundedRed" | "roundedWhite";
	widthType?: "auth" | "primary" | "rounded" | "roundedBig";
}


export const ReUseActionButton: React.FC<IReUseActionButtonProps> = (props) => {
	const { buttonType, displayText, toPath, locationState, fontSize = "14px", customWidth, paddingInline = "20px", displayIconType, margin = "0 0 0 0" } = props;
	const { themedButton = "primary", iconType, widthType, children, onClick,/*  yesClick, */ onFormikClick, type, customColor/* =`${COLORS.darkGray}` */, isDisabled, isLoading, isAccout } = props;

	const handleClick = async (/* event: React.MouseEvent<HTMLButtonElement> */) => {
		if (onClick) {
			// await onClick(event);
			await onClick();
		} else if (onFormikClick) {
			const formikValues = { fullName: '', email: '' }; // Replace with actual values
			await onFormikClick(formikValues);
		}
	};

	return (
		<>
			{buttonType === "actionButton" && onClick || onFormikClick ? (
				<Styled.Button type={type || "button"} themedButton={themedButton} widthType={widthType} onClick={handleClick} /* style={isAccout && isDisabled ? { opacity: 0.5 } : undefined} */ disabled={isDisabled} fontSize={fontSize} margin={margin} paddingInline={paddingInline} customWidth={customWidth}>
					{themedButton === "capium" && <Styled.displayContent>{!isLoading && <Icon type={iconType ? "googleIcon" : "capiumLogo"} />}</Styled.displayContent>}
					<Styled.displayContent>
						{displayIconType ? <Icon type={displayIconType} /> : null}
						{isLoading ? <LoaderComponent theme={themedButton === "capium" ? "avatarMin" : ""} /> : children ? children : displayText ? displayText : "Null"}
					</Styled.displayContent>
				</Styled.Button>
			) : buttonType == "actionButton" && toPath /* && locationState */ ? (
				<Styled.Button themedButton={themedButton} widthType={widthType} /* style={isAccout && isDisabled ? { opacity: 0.5 } : undefined} */ disabled={isDisabled} fontSize={fontSize} margin={margin}>
					<Styled.BtnLink to={toPath} state={locationState}  paddingInline={paddingInline} customWidth={customWidth}>
					<Styled.displayContent customColor={customColor}>
						{displayIconType ? <Icon type={displayIconType} /> : null}
						{isLoading ? <LoaderComponent theme={themedButton === "capium" ? "avatarMin" : ""} /> : children ? children : displayText ? displayText : "Null"}
					</Styled.displayContent>
					</Styled.BtnLink>
				</Styled.Button>
				// ===================================================>>>>>>>>>>>>========================================================================>>>>>>>>>>>>>>>>>>>>>>>>>>=========================================================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
			) : buttonType == "text-link" && onClick || onFormikClick ? (
				<Styled.textlinkp /* type={type || "button"} */ widthType={widthType} onClick={handleClick} /* style={isAccout && isDisabled ? { opacity: 0.5 } : undefined} */ isDisabled={isDisabled} margin={margin}>
					{themedButton === "capium" && <Styled.displayContent>{!isLoading && <Icon type={iconType ? "googleIcon" : "capiumLogo"} />}</Styled.displayContent>}
					<Styled.displayContent buttonType={buttonType} customColor={customColor} fontSize={fontSize}>
						{displayIconType ? <Icon type={displayIconType} /> : null}
						{isLoading ? <LoaderComponent theme={themedButton === "capium" ? "avatarMin" : ""} /> : children ? children : displayText ? displayText : "Null"}
					</Styled.displayContent>
				</Styled.textlinkp>
			) : buttonType == "text-link" && toPath /* && locationState */ ? (
				<Styled.textlink /* type={type || "button"} */ widthType={widthType} to={toPath} state={locationState} /* style={isAccout && isDisabled ? { opacity: 0.5 } : undefined} */ isDisabled={isDisabled} margin={margin}>
					{themedButton === "capium" && <Styled.displayContent>{!isLoading && <Icon type={iconType ? "googleIcon" : "capiumLogo"} />}</Styled.displayContent>}
					<Styled.displayContent buttonType={buttonType} customColor={customColor} fontSize={fontSize}>
						{displayIconType ? <Icon type={displayIconType} /> : null}
						{isLoading ? <LoaderComponent theme={themedButton === "capium" ? "avatarMin" : ""} /> : children ? children : displayText ? displayText : "Null"}
					</Styled.displayContent>
				</Styled.textlink>
			) :null}
		</>
	);
};

// : buttonType == "actionButton" && toPath && locationState ? (
// 	<Styled.ButtonLink to={toPath} state={locationState} themedButton={themedButton} widthType={widthType} style={isAccout && isDisabled ? { opacity: 0.5 } : undefined} isDisabled={isDisabled} fontSize={fontSize} margin={margin} paddingInline={paddingInline} paddingBlock={paddingBlock}>
// 		{themedButton === "capium" && <Styled.displayContent>{!isLoading && <Icon type={iconType ? "googleIcon" : "capiumLogo"} />}</Styled.displayContent>}
// 		<Styled.displayContent>
// 			{displayIconType ? <Icon type={displayIconType} /> : null}
// 			{isLoading ? <LoaderComponent theme={themedButton === "capium" ? "avatarMin" : ""} /> : children ? children : displayText ? displayText : "Null"}{" "}
// 		</Styled.displayContent>
// 	</Styled.ButtonLink>
// ) 

// ========>
// buttonType === "actionButton" && !toPath && onFormikClick ? (
// 	<Styled.Button type={type || "button"} themedButton={themedButton} widthType={widthType} onClick={handleClick} /* style={isAccout && isDisabled ? { opacity: 0.5 } : undefined} */ disabled={isDisabled} fontSize={fontSize} margin={margin} paddingInline={paddingInline} customWidth={customWidth}>
// 		{themedButton === "capium" && <Styled.displayContent>{!isLoading && <Icon type={iconType ? "googleIcon" : "capiumLogo"} />}</Styled.displayContent>}
// 		<Styled.displayContent>
// 			{displayIconType ? <Icon type={displayIconType} /> : null}
// 			{isLoading ? <LoaderComponent theme={themedButton === "capium" ? "avatarMin" : ""} /> : children ? children : displayText ? displayText : "Null"}
// 		</Styled.displayContent>
// 	</Styled.Button>
// ) :

// ========>
// buttonType == "text-link" && onFormikClick ? (
// 	<Styled.textlinkp /* type={type || "button"} */ themedButton={themedButton} widthType={widthType} onClick={handleClick} /* style={isAccout && isDisabled ? { opacity: 0.5 } : undefined} */ isDisabled={isDisabled} margin={margin}>
// 		{themedButton === "capium" && <Styled.displayContent>{!isLoading && <Icon type={iconType ? "googleIcon" : "capiumLogo"} />}</Styled.displayContent>}
// 		<Styled.displayContent buttonType={buttonType} customColor={customColor}>
// 			{displayIconType ? <Icon type={displayIconType} /> : null}
// 			{isLoading ? <LoaderComponent theme={themedButton === "capium" ? "avatarMin" : ""} /> : children ? children : displayText ? displayText : "Null"}
// 		</Styled.displayContent>
// 	</Styled.textlinkp>
// ) :
