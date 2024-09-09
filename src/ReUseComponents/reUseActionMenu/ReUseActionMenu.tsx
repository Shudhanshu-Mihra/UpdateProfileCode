import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { LoaderComponent } from "../../components/Loader";
import { Icon } from "components/Icons/Icons";

import { ActionMenuList } from "./ActionMenuList";

import { reUseActionMenuStyle as Styled } from "./ReUseActionMenu.style";
import { useToggle } from "hooks/useToggle";
import { useOutsideClick } from "hooks/useOutsideClick";

export interface IReUseActionMenuProps {
	displayText?: string;
	toPath?: string | false;
	locationState?: { action: string };
	paddingInline?: string;
	margin?: string;
	customWidth?: string;
	fontSize?: string;
	displayIconType?: string;
	title?: string | null;

	actionListArray: any[];

	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | (() => {});
	// onCLick: onActionsClickType | (() => {});
	isActionMenuDisabled: boolean;
	isLoading?: boolean;
	themedButton?: "primary" | "secondary";
}
	
	export const ReUseActionMenu: React.FC<IReUseActionMenuProps> = (props) => {
		const { displayText, toPath, margin = "0 0 0 0", fontSize = "14px", customWidth, paddingInline = "18px", displayIconType, title } = props;
		const {  actionListArray } = props;
		const { themedButton, onClick, isActionMenuDisabled, isLoading } = props;
		
		const [showActionMenuList, setShowActionMenuList] = useState(false);
		const ref = useOutsideClick(() => setShowActionMenuList(false));

	const defaultHandler = () => setShowActionMenuList((prev) => !prev);

	return (
		<Styled.Button
			ref={ref}
			themedButton={themedButton}
			onClick={onClick ? onClick : defaultHandler}
			style={isActionMenuDisabled ? { opacity: 0.5 } : { opacity: 1 }}
			disabled={isActionMenuDisabled}
			isActionMenuDisabled={isActionMenuDisabled}
			customWidth={customWidth}
			fontSize={fontSize}
			margin={margin}
			paddingInline={paddingInline}
			title={isActionMenuDisabled ? "select any item" : undefined}
		>
			<Styled.displayContent>
				{isLoading ? <LoaderComponent theme="avatarMin" /> : displayText ? displayText : null}
				<Icon type={displayIconType || "threeDots"} fill="red" />
			</Styled.displayContent>
			{!!showActionMenuList && <ActionMenuList actionListArray={actionListArray} />}
		</Styled.Button>
	);
};
