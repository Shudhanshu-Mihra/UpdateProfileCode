import React from "react";
import { useMatch } from "react-router-dom";

import { Submenu } from "../Submenu";

import { useCustomLinkState } from "./CustomLink.state";
import { CustomLinkStyles as Styled } from "./CustomLink.style";
import { Icon } from ".././Icons";

export interface CustomLinkProps {
	isLast?: boolean;
	is_sales: boolean;
	tabs?: string[];
	to: string;
	isDisabled?: boolean;
	icontype: string;
	children: any;
}

export const CustomLink = (props: CustomLinkProps) => {
	const { children, is_sales, to, isLast, tabs, isDisabled, icontype } = props;

	const { isHover, onMouseEnterHandler, onMouseLeaveHandler } = useCustomLinkState();

	const isActive = useMatch({
		path: to,
		end: to.length === 1,
	});

	return (
		<Styled.Link onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} data-testid="header-link" is_last={`${isLast}`} /* is_sales={is_sales} */ active={isActive} to={to} is_disabled={isDisabled ? `${isDisabled}` : ""}>
				<Icon type={icontype} />
			{/* <Styled.svg active={isActive}>
			</Styled.svg> */}
			{/* <Icon type={icontype} width={24} height={24} /> */}
			{children}
			{tabs && isHover && <Submenu menuItems={tabs} />}
		</Styled.Link>
	);
};
